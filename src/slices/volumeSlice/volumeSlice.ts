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
  reducers: {},
});

const { actions, reducer } = timerSlice;
export const {} = actions;
export default reducer;
