import { takeEvery, put } from 'redux-saga/effects';
import { actions } from '@core/store/actions';
import { errorOccured } from '@core/store/errorSlice';

import addCardWorker from './workers/addCardWorker';
import addColumnWorker from './workers/addColumnWorker';
import addDeskWorker from './workers/addDeskWorker';
import changeCardTextWorker from './workers/changeCardTextWorker';
import changeColumnTitleWorker from './workers/changeColumnTitleWorker';
import changeDeskTitleWorker from './workers/changeDeskTitleWorker';
import getDeskWorker from './workers/getDeskWorker';
import getDeskListWorker from './workers/getDeskListWorker';
import handleCardsReorderingWorker from './workers/handleCardsReorderingWorker';
import handleColumnsReorderingWorker from './workers/handleColumnsReorderingWorker';
import removeCardWorker from './workers/removeCardWorker';
import removeColumnWorker from './workers/removeColumnWorker';
import removeDeskWorker from './workers/removeDeskWorker';

export default function* sagaWatcher() {
  try {
    yield takeEvery(actions.ADD_CARD, addCardWorker);
    yield takeEvery(actions.ADD_COLUMN, addColumnWorker);
    yield takeEvery(actions.ADD_DESK, addDeskWorker);
    yield takeEvery(actions.CHANGE_CARD_TEXT, changeCardTextWorker);
    yield takeEvery(actions.CHANGE_COLUMN_TITLE, changeColumnTitleWorker);
    yield takeEvery(actions.CHANGE_DESK_TITLE, changeDeskTitleWorker);
    yield takeEvery(actions.GET_DESK_LIST, getDeskListWorker);
    yield takeEvery(actions.GET_DESK, getDeskWorker);
    yield takeEvery(
      actions.HANDLE_CARDS_REORDERING,
      handleCardsReorderingWorker,
    );
    yield takeEvery(
      actions.HANDLE_COLUMNS_REORDERING,
      handleColumnsReorderingWorker,
    );
    yield takeEvery(actions.REMOVE_CARD, removeCardWorker);
    yield takeEvery(actions.REMOVE_COLUMN, removeColumnWorker);
    yield takeEvery(actions.REMOVE_DESK, removeDeskWorker);
  } catch (error) {
    put(errorOccured('No connection with database'));
  }
}
