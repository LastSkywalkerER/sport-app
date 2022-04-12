import { DropResult } from 'react-beautiful-dnd';

export enum actions {
  ADD_CARD = 'GET_DESK_FROM_DB',
  ADD_COLUMN = 'ADD_COLUMN',
  ADD_DESK = 'ADD_DESK',
  CHANGE_CARD_TEXT = 'CHANGE_CARD_TEXT',
  CHANGE_COLUMN_TITLE = 'CHANGE_COLUMN_TITLE',
  CHANGE_DESK_TITLE = 'CHANGE_DESK_TITLE',
  CREATE_USER = 'CREATE_USER',
  GET_DESK_LIST = 'GET_DESK_LIST',
  GET_DESK = 'GET_DESK',
  HANDLE_CARDS_REORDERING = 'HANDLE_CARDS_REORDERING',
  HANDLE_COLUMNS_REORDERING = 'HANDLE_COLUMNS_REORDERING',
  REMOVE_CARD = 'REMOVE_CARD',
  REMOVE_COLUMN = 'REMOVE_COLUMN',
  REMOVE_DESK = 'REMOVE_DESK',
}

export function addCard(text: string, idCol: string) {
  return { type: actions.ADD_CARD, payload: { text, idCol } };
}

export function addColumn(title: string) {
  return { type: actions.ADD_COLUMN, payload: { title } };
}

export function addDesk(title: string) {
  return { type: actions.ADD_DESK, payload: { title } };
}

export function changeCardText(text: string, idCol: string, idCard: string) {
  return { type: actions.CHANGE_CARD_TEXT, payload: { text, idCol, idCard } };
}

export function changeColumnTitle(title: string, idCol: string) {
  return { type: actions.CHANGE_COLUMN_TITLE, payload: { title, idCol } };
}

export function changeDeskTitle(title: string, idDesk: string) {
  return { type: actions.CHANGE_DESK_TITLE, payload: { title, idDesk } };
}

export function createUser() {
  return { type: actions.CREATE_USER };
}

export function getDeskList() {
  return { type: actions.GET_DESK_LIST };
}

export function getDesk(id: string, userName: string) {
  return { type: actions.GET_DESK, payload: { id, userName } };
}

export function handleCardsReordering(result: DropResult) {
  return { type: actions.HANDLE_CARDS_REORDERING, payload: { result } };
}

export function handleColumnsReordering(result: DropResult) {
  return { type: actions.HANDLE_COLUMNS_REORDERING, payload: { result } };
}

export function removeCard(idCol: string, idCard: string) {
  return { type: actions.REMOVE_CARD, payload: { idCol, idCard } };
}

export function removeColumn(idCol: string) {
  return { type: actions.REMOVE_COLUMN, payload: { idCol } };
}

export function removeDesk(id: string) {
  return { type: actions.REMOVE_DESK, payload: { id } };
}
