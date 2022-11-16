import { Flex, Button, Heading } from "@chakra-ui/react";
import { useRef, useState } from "react";
import "./Main.scss";

const Main = ({ wrapperPageRef }) => {
  const [textContentButton, setTextContentButton] = useState("Start");

  const [focusTime, setFocusTime] = useState(25);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(15);
  const [mode, setMode] = useState("focus");

  const minutesRef = useRef();
  const secondsRef = useRef();

  let timerId = null;
  let deadline = null;

  const startTimer = () => {
    if (textContentButton === "Start") {
      deadline = new Date();

      switch (mode) {
        case "focus":
          deadline.setMinutes(deadline.getMinutes() + focusTime);
          break;
        case "shortBreak":
          deadline.setMinutes(deadline.getMinutes() + shortBreakTime);
          break;
        case "longBreak":
          deadline.setMinutes(deadline.getMinutes() + longBreakTime);
          break;
        default:
          deadline.setMinutes(deadline.getMinutes() + focusTime);
      }

      setTextContentButton("Stop");
      timerId = setInterval(countdownTimer, 1000);
    } else if (textContentButton === "Stop") {
      console.log("!");
      setTextContentButton("Start");
      clearInterval(timerId);
    }
  };

  function countdownTimer() {
    const diff = deadline - new Date();

    if (diff <= 0) {
      clearInterval(timerId);
    }

    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

    console.log(minutes);
    console.log(seconds);

    if (minutesRef.current) {
      minutesRef.current.textContent = minutes < 10 ? "0" + minutes : minutes;
    }
    if (secondsRef.current) {
      secondsRef.current.textContent = seconds < 10 ? "0" + seconds : seconds;
    }
  }

  const pomodoro = (e) => {
    wrapperPageRef.current.classList.remove("green", "blue");
    wrapperPageRef.current.classList.add("red");

    document.querySelectorAll(".main__option").forEach((mainOption) => {
      mainOption.classList.remove("active");
    });
    e.target.classList.add("active");

    if (textContentButton === "Stop") {
      console.log("!");
    }
    setFocusTime(25);
    setMode("focus");
  };

  const shortBreak = (e) => {
    wrapperPageRef.current.classList.remove("red", "blue");
    wrapperPageRef.current.classList.add("green");

    document.querySelectorAll(".main__option").forEach((mainOption) => {
      mainOption.classList.remove("active");
    });
    e.target.classList.add("active");
    setShortBreakTime(5);
    setMode("shortBreak");
  };

  const longBreak = (e) => {
    wrapperPageRef.current.classList.remove("red", "green");
    wrapperPageRef.current.classList.add("blue");

    document.querySelectorAll(".main__option").forEach((mainOption) => {
      mainOption.classList.remove("active");
    });
    e.target.classList.add("active");
    setLongBreakTime(15);
    setMode("longBreak");
  };

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
        <Button
          className="main__option active"
          fontSize="18px"
          width="100px"
          height="28px"
          background="transparent"
          border="none"
          color="white"
          cursor="pointer"
          _hover={{ background: "#808080" }}
          onClick={(e) => pomodoro(e)}
        >
          Pomodoro
        </Button>
        <Button
          className="main__option"
          fontSize="18px"
          width="100px"
          height="28px"
          background="transparent"
          border="none"
          color="white"
          cursor="pointer"
          _hover={{ background: "#808080" }}
          onClick={(e) => shortBreak(e)}
        >
          Short Break
        </Button>
        <Button
          className="main__option"
          fontSize="18px"
          width="100px"
          height="28px"
          background="transparent"
          border="none"
          color="white"
          cursor="pointer"
          _hover={{ background: "#808080" }}
          onClick={(e) => longBreak(e)}
        >
          Long Break
        </Button>
      </Flex>
      <Flex gap="10px" alignItems="center">
        <Heading as="h3" fontSize="120px" margin="20px 0px" ref={minutesRef}>
          {currentTIme > 10 ? currentTIme : `0${currentTIme}`}
        </Heading>
        <Heading as="h3" fontSize="120px" margin="20px 0px">
          :
        </Heading>
        <Heading as="h3" fontSize="120px" margin="20px 0px" ref={secondsRef}>
          00
        </Heading>
      </Flex>
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
