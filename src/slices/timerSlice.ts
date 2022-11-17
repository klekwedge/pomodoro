import { createSlice } from "@reduxjs/toolkit";
import { TimerState } from "./timerSlice.types";

const initialState: TimerState = {
  focusTime: 25,
  shortBreakTime: 5,
  longBreakTime: 15,
  autoStartBreaks: false,
  autoStartPomodoros: false,
  longBreakInterval: 4,
  alarmSound: "digital",
  alarmVolume: 50,
  repeat: 1,
  tickingSound: "none",
  tickingVolume: 50,
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
