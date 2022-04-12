import getUsersRef from '@core/utilities/getUsersRef';
import { setDoc, doc } from 'firebase/firestore';
import { errorOccured } from '@core/store/errorSlice';

export default function createUserDb(uid: string, name: string, email: string) {
  const usersRef = getUsersRef();

  setDoc(doc(usersRef, uid), {
    name: name,
    email: email,
  }).catch((error) => {
    store.dispatch(
      errorOccured('No connection with database, check your internet'),
    );
  });
}
