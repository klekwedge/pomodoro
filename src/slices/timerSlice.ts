import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModeType } from "../types/types";
import { TimerState } from "./timerSlice.types";

const initialState: TimerState = {
  focusTime: 1,
  shortBreakTime: 2,
  longBreakTime: 3,
  isAutoStartBreaks: true,
  isAutoStartPomodoros: true,
  longBreakInterval: 4,
  alarmSound: "digital",
  alarmVolume: 50,
  repeat: 1,
  tickingSound: "none",
  tickingVolume: 50,
  currentRound: 1,
  mode: "focus",
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    changeMode: (state, action) => {
      state.mode = action.payload;
    },
    resetCurrentRound: (state) => {
      state.currentRound = 1;
    },
    incCurrentRound: (state) => {
      state.currentRound = state.currentRound + 1;
    },
    changeFocusTime: (state, action) => {
      state.focusTime = action.payload;
    },
    changeShortBreakTime: (state, action) => {
      state.shortBreakTime = action.payload;
    },
    changeLongBreakTime: (state, action) => {
      state.longBreakTime = action.payload;
    },
    changeAutoStartBreaks: (state, action) => {
      state.isAutoStartBreaks = action.payload;
    },
    changeAutoStartPomodoros: (state, action) => {
      state.isAutoStartPomodoros = action.payload;
    },
    changeLongBreakInterval: (state, action) => {
      state.longBreakInterval = action.payload;
    },
  },
});

const { actions, reducer } = timerSlice;
export const {
  changeMode,
  changeFocusTime,
  changeShortBreakTime,
  changeLongBreakTime,
  changeAutoStartBreaks,
  changeAutoStartPomodoros,
  incCurrentRound,
  resetCurrentRound,
  changeLongBreakInterval
} = actions;
export default reducer;
