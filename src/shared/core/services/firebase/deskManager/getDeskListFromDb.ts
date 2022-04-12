import getDesksRef from '@core/utilities/getDesksRef';
import store from '@core/store/store';
import { getDocs } from 'firebase/firestore';
import { addDesk } from '@core/store/deskListSlice';

export default async function getDeskListFromDb() {
  const desksRef = getDesksRef();

  return await getDocs(desksRef);
}
