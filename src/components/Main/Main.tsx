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
  const [timeLeft, setTimeLeft] = useState(25);
  const [mode, setMode] = useState("focus");
  const [progress, setProgress] = useState(0);

  let timer: any;

  useEffect(() => {
    switch (mode) {
      case "focus":
        setTimeLeft(30 * 60);
        break;
      case "shortBreak":
        setTimeLeft(5 * 60);
        break;
      case "longBreak":
        setTimeLeft(15 * 60);
        break;
      default:
        setTimeLeft(30 * 60);
        break;
    }
  }, [mode]);

  const countdownTimer = () => {
    console.log(timeLeft);
    if (timeLeft !== 0) {
      setTimeLeft((prev) => prev - 1);
      setProgress((prev) => prev + 1);
    }
  };

  const updateCount = () => {
    if (textContentButton === "Stop") {
      timer = !timer && setInterval(() => countdownTimer(), 1000);
    }

    if (textContentButton === "Start") {
      clearInterval(timer);
    }
  };

  useEffect(() => {
    updateCount();
    return () => clearInterval(timer);
  }, [textContentButton]);

  const startTimer = (e) => {
    if (textContentButton === "Start") {
      setTextContentButton("Stop");
    } else if (textContentButton === "Stop") {
      setTextContentButton("Start");
    }
  };

  // setTextContentButton("Stop");

  function formatTime(time: any) {
    return dayjs.duration(time, "seconds").format("mm:ss");
  }

  const changeMode = (e) => {
    wrapperPageRef.current.classList.remove("green", "blue", "red");
    wrapperPageRef.current.classList.add(e.target.dataset.color);

    document.querySelectorAll(".main__option").forEach((mainOption) => {
      mainOption.classList.remove("active");
    });
    e.target.classList.add("active");

    setMode(e.target.dataset.mode);
  };

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
        <ButtonTab mode="focus" color="red" clickHandler={changeMode}>
          Pomodoro
        </ButtonTab>
        <ButtonTab mode="shortBreak" color="green" clickHandler={changeMode}>
          Short Break
        </ButtonTab>
        <ButtonTab mode="longBreak" color="blue" clickHandler={changeMode}>
          {" "}
          Long Break
        </ButtonTab>
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
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          startTimer(e)
        }
      >
        {textContentButton}
      </Button>
    </Flex>
  );
};
export default Main;
