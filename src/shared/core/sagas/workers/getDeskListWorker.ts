import { put, call } from 'redux-saga/effects';
import { setDeskListLoad } from '@core/store/loadersSlice';
import { getDeskListFromDb } from '@core/services/firebase/deskManager';
import { addDesk, clearDesks } from '@core/store/deskListSlice';
import store from '@core/store/store';
import { DocumentData } from '@firebase/firestore';

export default function* getDeskListWorker() {
  yield put(setDeskListLoad(false));
  yield put(clearDesks());
  const docs = yield call(getDeskListFromDb);
  yield docs.forEach((doc: DocumentData) => {
    store.dispatch(addDesk({ id: doc.id, title: doc.data().title }));
  });
  yield put(setDeskListLoad(true));
}
