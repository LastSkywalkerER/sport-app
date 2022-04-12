import { put, call } from 'redux-saga/effects';
import { changeColumnTitleOnDb } from '@core/services/firebase/deskManager';
import Action from '@core/models/Action';
import { changeColumnTitle } from '@core/store/deskSlice';

export default function* changeColumnTitleWorker(action: Action) {
  yield put(
    changeColumnTitle({
      title: action.payload.title,
      idCol: action.payload.idCol,
    }),
  );
  yield call(() =>
    changeColumnTitleOnDb(action.payload.title, action.payload.idCol),
  );
}
