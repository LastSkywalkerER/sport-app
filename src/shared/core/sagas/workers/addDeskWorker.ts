import Action from '@core/models/Action';
import { addDeskToDb } from '@core/services/firebase/deskManager';
import { addDesk } from '@core/store/deskListSlice';
import { setDeskItemLoad } from '@core/store/loadersSlice';
import { put, call } from 'redux-saga/effects';

export default function* addDeskWorker(action: Action) {
  yield put(setDeskItemLoad(true));
  const doc = yield call(() => addDeskToDb(action.payload.title));
  yield put(setDeskItemLoad(false));
  yield put(addDesk({ title: action.payload.title, id: doc.id }));
}
