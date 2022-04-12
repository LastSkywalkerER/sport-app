import ColumnInterface from '@core/models/Column';
import DeskInerface from '@core/models/Desk';
import store from '@core/store/store';

export default function getColumnById(
  id: string,
  extDesk?: DeskInerface,
): ColumnInterface {
  let desk: DeskInerface;
  if (!extDesk) {
    desk = store.getState().desk;
  } else {
    desk = extDesk;
  }

  return desk.columns.reduce((prev, cur) => {
    if (cur.id === id) {
      return cur;
    }
    return prev;
  }, {} as ColumnInterface);
}
