export interface VolumeState {
  alarmSound: "digital" | "bell";
  alarmVolume: number;
  repeat: number;
  tickingSound: "none" | "ticking-fast" | "ticking-slow";
  tickingVolume: number;
}
