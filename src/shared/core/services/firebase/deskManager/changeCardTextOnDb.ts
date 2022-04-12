import { updateDoc, doc } from 'firebase/firestore';
import getColumnsRef from '@core/utilities/getColumnsRef';
import getColumnById from '@core/utilities/getColumnById';

export default function changeCardTextOnDb(idCol: string) {
  const columnsRef = getColumnsRef();

  const cards = getColumnById(idCol).cards;

  updateDoc(doc(columnsRef, idCol), {
    cards,
  });
}
