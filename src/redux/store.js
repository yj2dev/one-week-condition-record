import { configureStore } from "@reduxjs/toolkit";
import conditionSlice from "./slices/conditionSlice";

const store = configureStore({
  reducer: {
    conditionSlice,
  },
});

export default store;
