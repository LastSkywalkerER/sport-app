import { collection } from 'firebase/firestore';

import getUID from './getUID';
import getUsersRef from './getUsersRef';

export default function getDesksRef(uid: string = getUID()) {
  const usersRef = getUsersRef();

  return collection(usersRef, uid, 'desks');
}
