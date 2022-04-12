import Action from '@core/models/Action';
import { handleCardsReordering } from '@core/services/firebase/deskManager';
import { reorderingCards } from '@core/store/deskSlice';
import { put, call } from 'redux-saga/effects';

export default function* handleCardsReorderingWorker(action: Action) {
  yield put(reorderingCards(action.payload.result));
  yield call(() => handleCardsReordering(action.payload.result));
}
