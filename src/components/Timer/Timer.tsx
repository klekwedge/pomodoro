import { Flex, Button, Heading, Box, useDisclosure } from "@chakra-ui/react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useEffect, useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useAppSelector } from "../../hooks/redux-hook";
import { updateFavicon } from "../../hooks/useChangeFavicon";
import ButtonTab from "../ModeButton/ModeButton";
import { AiFillStepForward } from "react-icons/ai";
import "./Timer.scss";
import { ModeType } from "../../types/types";

dayjs.extend(duration);

interface TimerProps {
  wrapperPageRef: React.RefObject<HTMLDivElement>;
}

const Timer = ({ wrapperPageRef }: TimerProps) => {
  const cancelRef = useRef(null);
  let timerId: NodeJS.Timer | null = null;

  const { focusTime, shortBreakTime, longBreakTime, autoStartBreaks } =
    useAppSelector((state) => state.timer);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [textContentButton, setTextContentButton] = useState("Start");
  const [timeLeft, setTimeLeft] = useState(0);
  const [mode, setMode] = useState<ModeType>("focus");
  // const [progress, setProgress] = useState(0);

  const skipTimer = () => {
    onClose();
    resetTimer();
  };

  const resetTimer = () => {
    clearTimerId();
    setTextContentButton("Start");
    updateTimeLeftMode();

    if (autoStartBreaks && mode === "focus") {
      setTextContentButton("Start");
      if (wrapperPageRef.current) {
        wrapperPageRef.current.classList.remove("green", "blue", "red");
        wrapperPageRef.current.classList.add("green");
      }

      document.querySelectorAll(".main__option").forEach((mainOption) => {
        mainOption.classList.remove("active");
      });
      document.querySelectorAll(".main__option")[1].classList.add("active");

      setMode("shortBreak");
    }
  };

  useEffect(() => {
    document.querySelector(".main__option")?.classList.add("active");
  }, []);

  const updateTimeLeftMode = () => {
    switch (mode) {
      case "focus":
        setTimeLeft(focusTime * 2);
        break;
      case "shortBreak":
        setTimeLeft(shortBreakTime * 60);
        break;
      case "longBreak":
        setTimeLeft(longBreakTime * 60);
        break;
      default:
        setTimeLeft(focusTime * 60);
        break;
    }
  };

  useEffect(() => {
    updateFavicon(mode);
    updateTimeLeftMode();
  }, [mode, focusTime, shortBreakTime, longBreakTime]);

  const clearTimerId = () => {
    if (timerId) {
      clearInterval(timerId);
    }
    timerId = null;
  };

  const countdownTimer = () => {
    if (timeLeft > 0) {
      setTimeLeft((prev) => prev - 1);
    }
    if (timeLeft <= 0) {
      resetTimer();
    }
  };

  useEffect(() => {
    if (textContentButton === "Stop") {
      timerId = setInterval(countdownTimer, 1000);
    }
    return () => clearTimerId();
  }, [textContentButton, timeLeft]);

  const toggleTimer = () => {
    if (textContentButton === "Start") {
      setTextContentButton("Stop");
    } else if (textContentButton === "Stop") {
      setTextContentButton("Start");
    }
  };

  function formatTime(time: number) {
    return dayjs.duration(time, "seconds").format("mm:ss");
  }

  const changeMode = (
    e: React.BaseSyntheticEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setTextContentButton("Start");
    wrapperPageRef.current?.classList.remove("green", "blue", "red");
    wrapperPageRef.current?.classList.add(e.target.dataset.color);

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
          Long Break
        </ButtonTab>
      </Flex>
      <Heading as="h3" fontSize="120px" margin="20px 0px">
        {formatTime(timeLeft)}
      </Heading>
      <Box position="relative">
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
          onClick={() => toggleTimer()}
        >
          {textContentButton}
        </Button>
        {textContentButton === "Stop" ? (
          <Button
            position="absolute"
            top="50%"
            transform="translateY(-50%)"
            right="-90px"
            background="transparent"
            fontSize="30px"
            cursor="pointer"
            _hover={{ background: "transparent" }}
            _focus={{ background: "transparent" }}
            onClick={onOpen}
          >
            <AiFillStepForward />
          </Button>
        ) : null}
      </Box>
      <>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Skip timer
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={skipTimer} ml={3}>
                  Skip
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    </Flex>
  );
};
export default Timer;
