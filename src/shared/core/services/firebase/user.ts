import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
  updateProfile,
  applyActionCode,
} from 'firebase/auth';
import validate from './validator';
import store from '@core/store/store';
import { login, logout } from '@core/store/authSlice';
import { errorOccured } from '@core/store/errorSlice';
import { successOccured } from '@core/store/successSlice';
import { setMainPageLoad } from '@core/store/loadersSlice';
import { createUserDb } from './deskManager';
import { setUserName } from '@core/store/userNameSlice';

const auth = getAuth();

export function createUser(name: string, email: string, password: string) {
  if (validate(email, password, name)) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (auth.currentUser) {
          sendEmailVerification(auth.currentUser);

          updateProfile(auth.currentUser, {
            displayName: name,
          });
        } else {
          Promise.reject('No user');
        }
        const user = userCredential.user;
        createUserDb(
          user.uid,
          user.displayName || 'No name',
          user.email || 'No email',
        );
        store.dispatch(successOccured('Register success, check the inbox'));
      })
      .catch((error) => {
        store.dispatch(errorOccured(error.code));
      });
  }

  return new Promise(() => {});
}

export function signUser(email: string, password: string) {
  if (validate(email, password)) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (!user.emailVerified) {
          store.dispatch(successOccured('Сheck your email for confirmation'));
        }
      })
      .catch((error) => {
        store.dispatch(errorOccured(error.code));
      });
  }

  return new Promise(() => {});
}

export function signOutFromApp() {
  signOut(auth);
}

export function confirmEmail(actionCode: string) {
  return applyActionCode(auth, actionCode)
    .then((resp) => {})
    .catch((error) => {
      store.dispatch(errorOccured(error.code));
    });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User

    if (user.emailVerified) {
      store.dispatch(login(user.uid));
      store.dispatch(setUserName(user.displayName));
    } else {
      store.dispatch(successOccured('Сheck your email for confirmation'));
    }
    store.dispatch(setMainPageLoad(true));
  } else {
    // User is signed out
    store.dispatch(logout());
    store.dispatch(setMainPageLoad(true));
  }
});
