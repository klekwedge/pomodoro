import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VolumeState } from "./volumeSlice.types";

const initialState: VolumeState = {
  alarmSound: "digital",
  alarmVolume: 50,
  repeat: 1,
  tickingSound: "none",
  tickingVolume: 50,
};

const timerSlice = createSlice({
  name: "volume",
  initialState,
  reducers: {
    changeAlarmSound: (state, action) => {
      state.alarmSound = action.payload;
    },
    changeAlarmVolume: (state, action) => {
      state.alarmVolume = action.payload;
    },
    changeRepeat: (state, action) => {
      state.repeat = action.payload;
    },
    changeTickingSound: (state, action) => {
      state.tickingSound = action.payload;
    },
    changeTickingVolume: (state, action) => {
      state.tickingVolume = action.payload;
    },
  },
});

const { actions, reducer } = timerSlice;
export const {
  changeAlarmSound,
  changeAlarmVolume,
  changeRepeat,
  changeTickingSound,
  changeTickingVolume,
} = actions;
export default reducer;
