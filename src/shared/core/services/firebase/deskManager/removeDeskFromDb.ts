import getDesksRef from '@core/utilities/getDesksRef';
import { deleteDoc, doc } from 'firebase/firestore';
import store from '@core/store/store';
import { removeDesk } from '@core/store/deskListSlice';
import { errorOccured } from '@core/store/errorSlice';

export default async function removeDeskFromDb(id: string) {
  const desksRef = getDesksRef();

  return await deleteDoc(doc(desksRef, id));
}
