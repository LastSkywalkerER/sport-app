import getDesksRef from '@core/utilities/getDesksRef';
import { addDoc } from 'firebase/firestore';
import store from '@core/store/store';
import { addDesk } from '@core/store/deskListSlice';
import { errorOccured } from '@core/store/errorSlice';

export default async function addDeskToDb(title: string) {
  const desksRef = getDesksRef();

  return await addDoc(desksRef, {
    title,
  });
}
