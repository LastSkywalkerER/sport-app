import { createSlice } from "@reduxjs/toolkit";

const name: string = "success";

export const successSlice = createSlice({
  name,
  initialState: {
    message: [] as string[],
  },
  reducers: {
    successOccured: (state, action) => {
      state.message.push(action.payload);
    },
    clearSuccess: (state) => {
      state.message = [] as string[];
    },
  },
});

// Action creators are generated for each case reducer function
export const { successOccured, clearSuccess } = successSlice.actions;

export default successSlice.reducer;
