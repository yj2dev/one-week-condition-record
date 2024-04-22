import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

const initialState = {
  conditionList: [],
};

const conditionSlice = createSlice({
  name: "condition",
  initialState,
  reducers: {
    setCondition: (state, action) => {
      state.conditionList = action.payload;
    },
    updateRate: (state, action) => {
      const { id, rate } = action.payload;

      console.log("redux");
      console.log(id, rate);

      const index = state.conditionList.findIndex((item) => item.id === id);
      console.log("index >> ", index);

      if (index !== -1) {
        return produce(state, (draft) => {
          draft.conditionList[index].rate = rate;
        });
      }
    },
  },
});

export const { setCondition, updateRate } = conditionSlice.actions;
export default conditionSlice.reducer;
