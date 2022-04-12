import DeskInerface from '@core/models/Desk';
import ColumnInterface from '@core/models/Column';
import getDesksRef from '@core/utilities/getDesksRef';
import getUsersRef from '@core/utilities/getUsersRef';
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from 'firebase/firestore';
import sortByOrder from '@core/utilities/sortByOrder';

export default async function getDeskFromDb(id: string, userName: string) {
  const usersRef = getUsersRef();

  let desk: DeskInerface;

  const docs = await getDocs(query(usersRef, where('name', '==', userName)));
  const desksRef = getDesksRef(docs.docs[0].id);
  const deskData = await getDoc(doc(desksRef, id));
  const columnsRef = collection(desksRef, deskData.id, 'columns');

  if (deskData && deskData.data()) {
    desk = {
      id,
      // @ts-ignore
      title: deskData.data().title,
      columns: [] as ColumnInterface[],
    };
    const columnsData = await getDocs(columnsRef);
    const columns: ColumnInterface[] = [] as ColumnInterface[];
    columnsData.forEach((columnData) => {
      if (columnData.data()) {
        columns.push({
          id: columnData.id,
          title: columnData.data().title,
          order: columnData.data().order,
          cards: columnData.data().cards || [],
        });
      }
    });
    desk.columns = columns.sort(sortByOrder);
    return desk;
  }
}
