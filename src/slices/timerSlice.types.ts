import { ModeType } from "../types/types";

export interface TimerState {
  focusTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  autoStartBreaks: boolean;
  autoStartPomodoros: boolean;
  longBreakInterval: number;
  alarmSound: "digital" | "bell";
  alarmVolume: number;
  repeat: number;
  tickingSound: "none" | "ticking-fast" | "ticking-slow";
  tickingVolume: number;
  currentRound: number;
  mode: ModeType;
}
