import { updateDoc, arrayUnion, doc } from 'firebase/firestore';
import getColumnsRef from '@core/utilities/getColumnsRef';

export default async function addCardToDb(
  text: string,
  idCol: string,
  idCard: string,
) {
  const columnsRef = getColumnsRef();

  return await updateDoc(doc(columnsRef, idCol), {
    cards: arrayUnion({ text, id: idCard }),
  });
}
