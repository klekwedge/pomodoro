import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  focusTime: 25,
  shortBreakTime: 5,
  longBreakTime: 15,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    changeFocusTime: (state, action) => {
      state.focusTime = action.payload;
    },
    changeShortBreakTime: (state, action) => {
      state.shortBreakTime = action.payload;
    },
    changeLongBreakTime: (state, action) => {
      state.longBreakTime = action.payload;
    },
  },
});

const { actions, reducer } = timerSlice;
export const { changeFocusTime, changeShortBreakTime, changeLongBreakTime } =
  actions;
export default reducer;
