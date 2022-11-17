import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timer: 0,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    changeTime: (state, action) => {
      state.timer = action.payload;
    },
  },
});

const { actions, reducer } = timerSlice;
export const { changeTime } = actions;
export default reducer;
