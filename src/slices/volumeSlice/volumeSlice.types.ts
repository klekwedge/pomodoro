export interface VolumeState {
  alarmSound: "digital" | "bell" | 'kitchen';
  alarmVolume: number;
  repeat: number;
  tickingSound: "none" | "ticking-fast" | "ticking-slow";
  tickingVolume: number;
}
