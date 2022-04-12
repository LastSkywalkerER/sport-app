import Action from '@core/models/Action';
import { removeCardFromDb } from '@core/services/firebase/deskManager';
import { removeCard } from '@core/store/deskSlice';
import { put, call } from 'redux-saga/effects';

export default function* removeCardWorker(action: Action) {
  yield put(removeCard(action.payload));
  yield call(() => removeCardFromDb(action.payload.idCol));
}
