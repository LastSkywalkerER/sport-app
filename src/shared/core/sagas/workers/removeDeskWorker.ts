import Action from '@core/models/Action';
import { removeDeskFromDb } from '@core/services/firebase/deskManager';
import { removeDesk } from '@core/store/deskListSlice';
import { put, call } from 'redux-saga/effects';

export default function* removeDeskWorker(action: Action) {
  yield put(removeDesk({ id: action.payload.id }));
  yield call(() => removeDeskFromDb(action.payload.id));
}
