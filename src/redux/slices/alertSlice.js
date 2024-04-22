import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  content: "",
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    showAlert: (state, action) => {
      state.show = true;
      state.content = action.payload;
    },
    hideAlert: (state) => {
      state.show = false;
      state.content = "";
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;
