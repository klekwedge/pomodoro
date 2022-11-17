import { configureStore } from "@reduxjs/toolkit";
import timer from "../slices/timerSlice";

const store = configureStore({
  reducer: { timer },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
