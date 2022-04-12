import { updateDoc, doc } from 'firebase/firestore';
import getDesksRef from '@core/utilities/getDesksRef';

export default async function changeDeskTitleOnDb(
  title: string,
  idDesk: string,
) {
  const desksRef = getDesksRef();

  return await updateDoc(doc(desksRef, idDesk), {
    title: title,
  });
}
