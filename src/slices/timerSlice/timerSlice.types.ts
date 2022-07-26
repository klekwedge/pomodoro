import { ModeType } from "../../types/types";

export interface TimerState {
  focusTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  isAutoStartBreaks: boolean;
  isAutoStartPomodoros: boolean;
  longBreakInterval: number;
  currentRound: number;
  mode: ModeType;
  progress: ProgressEl[];
}

interface ProgressEl {
  date: Date;
  minutes: number;
  id: "string";
}
