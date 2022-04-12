import { createSlice } from "@reduxjs/toolkit";

const name: string = "editDialog";

export const editDialogSlice = createSlice({
  name,
  initialState: {
    string: "",
    action: "",
  },
  reducers: {
    openEditDialog: (state, action) => {
      state = action.payload;
    },
    closeEditDialog: (state) => {
      state = {
        string: "",
        action: "",
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { openEditDialog, closeEditDialog } = editDialogSlice.actions;

export default editDialogSlice.reducer;
