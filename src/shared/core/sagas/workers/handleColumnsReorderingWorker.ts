import Action from '@core/models/Action';
import { handleColumnsReordering } from '@core/services/firebase/deskManager';
import { reorderingColumns } from '@core/store/deskSlice';
import { put, call } from 'redux-saga/effects';

export default function* handleColumnsReorderingWorker(action: Action) {
  yield put(reorderingColumns(action.payload.result));
  yield call(() => handleColumnsReordering(action.payload.result));
}
