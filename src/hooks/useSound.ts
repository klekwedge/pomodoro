interface playerProps {
  src: string;
  volume: number;
}

export function player({ src, volume}: playerProps) {
  const audio = new Audio();
  audio.src = src;
  audio.volume = volume / 100;

  const play = () => {
    audio.play();
  };

  const stop = () => {
    audio.pause();
  };

  const setVolume = (value: number) => (audio.volume = value / 100);

  const setAudio = (src: string) => {
    audio.src = src;
  };

  return {
    play,
    stop,
    setVolume,
    setAudio,
  };
}
