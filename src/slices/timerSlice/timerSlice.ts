import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModeType } from "../../types/types";
import { TimerState } from "./timerSlice.types";

const initialState: TimerState = {
  focusTime: 20,
  shortBreakTime: 5,
  longBreakTime: 10,
  isAutoStartBreaks: true,
  isAutoStartPomodoros: true,
  longBreakInterval: 4,
  currentRound: 1,
  mode: "focus",
  progress: [],
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
    addProgress: (state, action) => {
      state.progress.push(action.payload);
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
  changeLongBreakInterval,
  addProgress
} = actions;
export default reducer;
