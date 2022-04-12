import { createSlice } from '@reduxjs/toolkit';
import DeskInerface from '@core/models/Desk';
import CardInterface from '@core/models/Card';
import ColumnInterface from '@core/models/Column';
import { DropResult } from 'react-beautiful-dnd';
import getColumnById from '@core/utilities/getColumnById';

const name: string = 'desk';

export const deskSlice = createSlice({
  name,
  initialState: {
    id: '',
    title: '',
    columns: [] as ColumnInterface[],
  },
  reducers: {
    initDesk: (state, action) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.columns = action.payload.columns
        ? action.payload.columns
        : ([] as ColumnInterface[]);
    },
    changeDeskTitle: (state, action) => {
      state.title = action.payload;
    },
    addColumn: (state, action) => {
      state.columns.push({
        order: action.payload.order,
        id: action.payload.idCol,
        title: action.payload.title,
        cards: [] as CardInterface[],
      });
    },
    changeColumnTitle: (state, action) => {
      state.columns.forEach((column) => {
        if (column.id === action.payload.idCol) {
          column.title = action.payload.title;
          return;
        }
      });
    },
    removeColumn: (state, action) => {
      state.columns = state.columns.filter(
        (col) => col.id !== action.payload.idCol,
      );
    },
    addCard: (state, action) => {
      state.columns.forEach((column) => {
        if (column.id === action.payload.idCol) {
          column.cards.push({
            order: column.cards.length,
            id: action.payload.id,
            text: action.payload.text,
          });
          return;
        }
      });
    },
    changeCardText: (state, action) => {
      state.columns.forEach((column) => {
        if (column.id === action.payload.idCol) {
          column.cards.forEach((card) => {
            if (card.id === action.payload.idCard) {
              card.text = action.payload.text;
              return;
            }
          });
          return;
        }
      });
    },
    removeCard: (state, action) => {
      state.columns.forEach((column) => {
        if (column.id === action.payload.idCol) {
          column.cards = column.cards.filter(
            (card) => card.id !== action.payload.idCard,
          );
          return;
        }
      });
    },
    reorderingCards: (state, action) => {
      let dragableCard: CardInterface = {} as CardInterface;
      let sourceColumn: ColumnInterface = {} as ColumnInterface;
      let destinationColumn: ColumnInterface = {} as ColumnInterface;

      state.columns.forEach((column) => {
        if (column.id === action.payload.source.droppableId) {
          sourceColumn = column;
        }
        if (column.id === action.payload.destination.droppableId) {
          destinationColumn = column;
        }
      });

      dragableCard = sourceColumn.cards[action.payload.source.index];
      sourceColumn.cards.splice(action.payload.source.index, 1);
      destinationColumn.cards.splice(
        action.payload.destination.index,
        0,
        dragableCard,
      );
    },
    reorderingColumns: (state, action) => {
      let dragableColumn = getColumnById(action.payload.draggableId, state);

      state.columns.splice(action.payload.source.index, 1);
      state.columns.splice(action.payload.destination.index, 0, dragableColumn);

      state.columns.forEach((col, i) => (col.order = i));
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  initDesk,
  changeDeskTitle,
  addColumn,
  changeColumnTitle,
  removeColumn,
  addCard,
  changeCardText,
  removeCard,
  reorderingCards,
  reorderingColumns,
} = deskSlice.actions;

export default deskSlice.reducer;
