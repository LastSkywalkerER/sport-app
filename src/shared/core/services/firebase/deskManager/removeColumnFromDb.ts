import { deleteDoc, doc } from 'firebase/firestore';
import getColumnsRef from '@core/utilities/getColumnsRef';

export default async function removeColumnFromDb(idCol: string) {
  const columnsRef = getColumnsRef();

  return await deleteDoc(doc(columnsRef, idCol));
}
