import { Flex, Button, Heading } from "@chakra-ui/react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useCallback, useEffect, useRef, useState } from "react";
import useCountdown from "../../hooks/useCountdown";
import ButtonTab from "../ButtonTab/ButtonTab";
import "./Main.scss";

dayjs.extend(duration);

const Main = ({ wrapperPageRef }: any) => {
  const [textContentButton, setTextContentButton] = useState("Start");
  const [focusTime, setFocusTime] = useState(30);
  const [timeLeft, setTimeLeft] = useState(focusTime * 60);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(15);
  const [mode, setMode] = useState("focus");
  const [progress, setProgress] = useState(0);

  let timer: any;

  function countdownTimer() {
    if (timeLeft !== 0) {
      setTimeLeft((prev) => prev - 1);
      setProgress((prev) => prev + 1);
    }
  }

  const updateCount = () => {
    if (textContentButton === "Stop") {
      timer = !timer && setInterval(countdownTimer, 1000);
    }

    if (textContentButton === "Start") {
      clearInterval(timer);
    }
  };

  useEffect(() => {
    updateCount();
    return () => clearInterval(timer);
  }, [textContentButton]);

  const startTimer = () => {
    if (textContentButton === "Start") {
      setTextContentButton("Stop");
    } else if (textContentButton === "Stop") {
      setTextContentButton("Start");
    }
  };

  function formatTime(time: any) {
    return dayjs.duration(time, "seconds").format("mm:ss");
  }

  const pomodoro = (e) => {
    wrapperPageRef.current.classList.remove("green", "blue");
    wrapperPageRef.current.classList.add("red");

    document.querySelectorAll(".main__option").forEach((mainOption) => {
      mainOption.classList.remove("active");
    });
    e.target.classList.add("active");

    setFocusTime(25);
    setMode("focus");
  };

  // const shortBreak = (e) => {
  //   wrapperPageRef.current.classList.remove("red", "blue");
  //   wrapperPageRef.current.classList.add("green");

  //   document.querySelectorAll(".main__option").forEach((mainOption) => {
  //     mainOption.classList.remove("active");
  //   });
  //   e.target.classList.add("active");
  //   setShortBreakTime(5);
  //   setMode("shortBreak");
  // };

  // const longBreak = (e) => {
  //   wrapperPageRef.current.classList.remove("red", "green");
  //   wrapperPageRef.current.classList.add("blue");

  //   document.querySelectorAll(".main__option").forEach((mainOption) => {
  //     mainOption.classList.remove("active");
  //   });
  //   e.target.classList.add("active");
  //   setLongBreakTime(15);
  //   setMode("longBreak");
  // };

  let currentTIme;

  switch (mode) {
    case "focus":
      currentTIme = focusTime;
      break;
    case "shortBreak":
      currentTIme = shortBreakTime;
      break;
    case "longBreak":
      currentTIme = longBreakTime;
      break;
    default:
      currentTIme = focusTime;
  }

  return (
    <Flex
      flexDirection="column"
      background="#DF645F"
      padding="20px 80px"
      alignItems="center"
      borderRadius="10px"
      className="wrapper-main"
    >
      <Flex gap="15px">
        {/* active */}
        <ButtonTab clickHandler={pomodoro}> Pomodoro</ButtonTab>
        {/* <ButtonTab clickHandler={shortBreak}>
          Short Break
        </ButtonTab>
        <ButtonTab clickHandler={longBreak}> Long Break</ButtonTab> */}
      </Flex>
      <Heading as="h3" fontSize="120px" margin="20px 0px">
        {formatTime(timeLeft)}
      </Heading>
      <Button
        className="main__button"
        fontSize="30px"
        padding="10px 20px"
        borderRadius="10px"
        fontWeight="500"
        width="190px"
        height="55px"
        background="white"
        border="none"
        cursor="pointer"
        color="#DB524D"
        onClick={(e) => startTimer(e)}
      >
        {textContentButton}
      </Button>
    </Flex>
  );
};
export default Main;
