import { updateDoc, doc } from 'firebase/firestore';
import getColumnsRef from '@core/utilities/getColumnsRef';

export default async function changeColumnTitleOnDb(
  title: string,
  idCol: string,
) {
  const columnsRef = getColumnsRef();

  return await updateDoc(doc(columnsRef, idCol), {
    title,
  });
}
