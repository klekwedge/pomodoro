import { configureStore } from "@reduxjs/toolkit";
import timer from "../slices/timerSlice/timerSlice";
import volume from "../slices/volumeSlice/volumeSlice";

const store = configureStore({
  reducer: { timer, volume },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
