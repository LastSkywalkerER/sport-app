import { createSlice } from '@reduxjs/toolkit';
import { DeskListInterface } from '@core/models/DeskList';
const name: string = 'deskList';

export const deskSlice = createSlice({
  name,
  initialState: {
    desks: [] as DeskListInterface[],
  },
  reducers: {
    addDesk: (state, action) => {
      state.desks.push({
        title: `${action.payload.title}`,
        id: `${action.payload.id}`,
      });
    },
    removeDesk: (state, action) => {
      state.desks = state.desks.filter((desk) => desk.id !== action.payload.id);
    },
    clearDesks: (state) => {
      state.desks = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addDesk, removeDesk, clearDesks } = deskSlice.actions;

export default deskSlice.reducer;
