import Action from '@core/models/Action';
import { removeColumnFromDb } from '@core/services/firebase/deskManager';
import { removeColumn } from '@core/store/deskSlice';
import { put, call } from 'redux-saga/effects';

export default function* removeColumnWorker(action: Action) {
  yield put(removeColumn({ idCol: action.payload.idCol }));
  yield call(() => removeColumnFromDb(action.payload.idCol));
}
