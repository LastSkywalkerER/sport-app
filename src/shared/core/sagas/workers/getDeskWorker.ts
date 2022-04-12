import { put, call } from 'redux-saga/effects';
import { setDeskLoad } from '@core/store/loadersSlice';
import { getDeskFromDb } from '@core/services/firebase/deskManager';

import Action from '@core/models/Action';
import { initDesk } from '@core/store/deskSlice';

export default function* getDeskWorker(action: Action) {
  yield put(setDeskLoad(false));
  const desk = yield call(() =>
    getDeskFromDb(action.payload.id, action.payload.userName),
  );
  yield put(initDesk(desk));
  yield put(setDeskLoad(true));
}
