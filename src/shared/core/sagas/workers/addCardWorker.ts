import { put, call } from 'redux-saga/effects';
import { addCardToDb } from '@core/services/firebase/deskManager';
import { addCard } from '@core/store/deskSlice';

import Action from '@core/models/Action';

export default function* addCardWorker(action: Action) {
  const idCard = `${new Date().getMilliseconds()}`;
  yield put(
    addCard({
      text: action.payload.text,
      id: idCard,
      idCol: action.payload.idCol,
    }),
  );
  yield call(() =>
    addCardToDb(action.payload.text, action.payload.idCol, idCard),
  );
}
