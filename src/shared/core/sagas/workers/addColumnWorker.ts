import Action from '@core/models/Action';
import { addColumnToDb } from '@core/services/firebase/deskManager';
import { put, call } from 'redux-saga/effects';
import store from '@core/store/store';
import { addColumn } from '@core/store/deskSlice';
import { setColumnLoad } from '@core/store/loadersSlice';

export default function* addColumnWorker(action: Action) {
  yield put(setColumnLoad(true));
  const order = store.getState().desk.columns.length;
  const doc = yield call(() => addColumnToDb(action.payload.title, order));
  yield put(setColumnLoad(false));
  yield put(addColumn({ title: action.payload.title, idCol: doc.id, order }));
}
