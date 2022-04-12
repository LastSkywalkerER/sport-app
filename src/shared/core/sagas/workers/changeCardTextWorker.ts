import Action from '@core/models/Action';
import { changeCardTextOnDb } from '@core/services/firebase/deskManager';
import { changeCardText } from '@core/store/deskSlice';
import { put, call } from 'redux-saga/effects';

export default function* changeCardTextWorker(action: Action) {
  yield put(
    changeCardText({
      text: action.payload.text,
      idCard: action.payload.idCard,
      idCol: action.payload.idCol,
    }),
  );
  yield call(() => changeCardTextOnDb(action.payload.idCol));
}
