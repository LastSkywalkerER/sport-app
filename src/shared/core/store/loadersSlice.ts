import { createSlice } from '@reduxjs/toolkit';

const name: string = 'loaders';

export const authSlice = createSlice({
  name,
  initialState: {
    mainPage: false,
    deskList: false,
    deskItem: false,
    column: false,
    desk: false,
  },
  reducers: {
    setMainPageLoad: (state, action) => {
      state.mainPage = action.payload;
    },
    setDeskListLoad: (state, action) => {
      state.deskList = action.payload;
    },
    setDeskItemLoad: (state, action) => {
      state.deskItem = action.payload;
    },
    setColumnLoad: (state, action) => {
      state.column = action.payload;
    },
    setDeskLoad: (state, action) => {
      state.desk = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setMainPageLoad,
  setDeskListLoad,
  setDeskItemLoad,
  setColumnLoad,
  setDeskLoad,
} = authSlice.actions;

export default authSlice.reducer;
