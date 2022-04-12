import { updateDoc, doc } from 'firebase/firestore';
import { DropResult } from 'react-beautiful-dnd';
import getColumnById from '@core/utilities/getColumnById';
import getColumnsRef from '@core/utilities/getColumnsRef';

export default async function handleCardsReordering(result: DropResult) {
  const columnsRef = getColumnsRef();

  await updateDoc(doc(columnsRef, result.source.droppableId), {
    cards: getColumnById(result.source.droppableId).cards,
  });
  if (result.destination) {
    await updateDoc(doc(columnsRef, result.destination.droppableId), {
      cards: getColumnById(result.destination.droppableId).cards,
    });
  }
}
