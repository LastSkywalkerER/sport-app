import { addDoc } from 'firebase/firestore';
import { errorOccured } from '@core/store/errorSlice';
import getColumnsRef from '@core/utilities/getColumnsRef';
import { addColumn } from '@core/store/deskSlice';

export default async function addColumnToDb(title: string, order: number) {
  const columnsRef = getColumnsRef();

  return await addDoc(columnsRef, {
    title,
    order,
  });
}
