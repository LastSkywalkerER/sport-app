import { updateDoc, doc } from 'firebase/firestore';
import { DropResult } from 'react-beautiful-dnd';
import getColumnsRef from '@core/utilities/getColumnsRef';
import store from '@core/store/store';

export default function handleColumnsReordering(result: DropResult) {
  const columnsRef = getColumnsRef();

  if (result.destination) {
    const columns = store.getState().desk.columns;
    columns.forEach(async (col) => {
      await updateDoc(doc(columnsRef, col.id), {
        order: col.order,
      });
    });
  }
}
