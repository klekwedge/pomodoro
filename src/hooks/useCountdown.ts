import { useCallback, useEffect, useRef, useState } from "react";

export default function useCountdown({ minutes, onStart, onStop }: any) {
  const time = minutes * 60;
//   const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(time);

  useEffect(() => {
    setTimeLeft(timeLeft);
  }, [time]);

  const start = useCallback(() => {
    onStart();
  }, [onStart]);

  const stop = useCallback(() => {
    onStop();
  }, [onStop]);

  const reset = useCallback(() => {
    // setProgress(0);
    onStop();
  }, [onStop]);

  return {
    start,
    stop,
    reset,
  };
}
