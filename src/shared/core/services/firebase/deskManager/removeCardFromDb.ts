import { updateDoc, doc } from 'firebase/firestore';
import getColumnsRef from '@core/utilities/getColumnsRef';
import getColumnById from '@core/utilities/getColumnById';

export default async function removeCardFromDb(idCol: string) {
  const columnsRef = getColumnsRef();

  const cards = getColumnById(idCol).cards;

  return await updateDoc(doc(columnsRef, idCol), {
    cards,
  });
}
