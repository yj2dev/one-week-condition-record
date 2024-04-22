import { configureStore } from "@reduxjs/toolkit";
import conditionSlice from "./slices/conditionSlice";
import alertSlice from "./slices/alertSlice";

const store = configureStore({
  reducer: {
    conditionSlice,
    alertSlice,
  },
});

export default store;
