import { createSlice } from "@reduxjs/toolkit";

const name: string = "error";

export const errorSlice = createSlice({
  name,
  initialState: {
    message: [] as string[],
  },
  reducers: {
    errorOccured: (state, action) => {
      state.message.push(action.payload);
    },
    clearError: (state) => {
      state.message = [] as string[];
    },
  },
});

// Action creators are generated for each case reducer function
export const { errorOccured, clearError } = errorSlice.actions;

export default errorSlice.reducer;
