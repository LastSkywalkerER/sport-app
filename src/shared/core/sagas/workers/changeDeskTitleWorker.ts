import Action from '@core/models/Action';
import { changeDeskTitleOnDb } from '@core/services/firebase/deskManager';
import { changeDeskTitle } from '@core/store/deskSlice';
import { put, call } from 'redux-saga/effects';

export default function* changeDeskTitleWorker(action: Action) {
  yield put(changeDeskTitle(action.payload.title));
  yield call(() =>
    changeDeskTitleOnDb(action.payload.title, action.payload.idDesk),
  );
}
