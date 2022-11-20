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
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hook";
import { updateFavicon } from "../../hooks/useChangeFavicon";
import ButtonTab from "../ModeButton/ModeButton";
import { AiFillStepForward } from "react-icons/ai";
import {
  changeMode,
  incCurrentRound,
  incProgress,
  resetCurrentRound,
} from "../../slices/timerSlice/timerSlice";

dayjs.extend(duration);

interface TimerProps {
  wrapperPageRef: React.RefObject<HTMLDivElement>;
}

const Timer = ({ wrapperPageRef }: TimerProps) => {
  const cancelRef = useRef(null);
  const pomodoroMode = useRef<HTMLButtonElement>(null);
  const shortBreakMode = useRef<HTMLButtonElement>(null);
  const longBreakMode = useRef<HTMLButtonElement>(null);

  let timerId: NodeJS.Timer | null = null;

  const {
    focusTime,
    shortBreakTime,
    longBreakTime,
    isAutoStartBreaks,
    isAutoStartPomodoros,
    mode,
    currentRound,
    longBreakInterval,
    progress,
  } = useAppSelector((state) => state.timer);
  const dispatch = useAppDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [textContentButton, setTextContentButton] = useState("Start");

  const [timeLeft, setTimeLeft] = useState(0);

  const skipTimer = () => {
    onClose();
    resetTimer();
  };

  const changeStyles = (isLongBreak: boolean) => {
    wrapperPageRef.current?.classList.remove("green", "blue", "red");
    pomodoroMode.current?.classList.remove("active");
    shortBreakMode.current?.classList.remove("active");
    longBreakMode.current?.classList.remove("active");

    if (mode === "focus" && !isLongBreak) {
      shortBreakMode.current?.classList.add("active");
      wrapperPageRef.current?.classList.add("green");
    } else if (mode === "focus" && isLongBreak) {
      longBreakMode.current?.classList.add("active");
      wrapperPageRef.current?.classList.add("blue");
    } else {
      pomodoroMode.current?.classList.add("active");
      wrapperPageRef.current?.classList.add("red");
    }
  };

  const resetTimer = () => {
    clearTimerId();
    setTextContentButton("Start");
    updateTimeLeftMode();

    if (isAutoStartBreaks && mode === "focus") {
      if (currentRound === longBreakInterval) {
        dispatch(resetCurrentRound());
        changeStyles(true);
      } else {
        dispatch(incCurrentRound());
        changeStyles(false);
      }

      setTextContentButton("Start");
      dispatch(changeMode("shortBreak"));
    }

    if (isAutoStartPomodoros && mode !== "focus") {
      setTextContentButton("Start");
      dispatch(changeMode("focus"));
      changeStyles(false);
    }
  };

  useEffect(() => {
    pomodoroMode.current?.classList.add("active");
  }, []);

  const updateTimeLeftMode = () => {
    switch (mode) {
      case "focus":
        setTimeLeft(focusTime * 5);
        break;
      case "shortBreak":
        setTimeLeft(shortBreakTime * 5);
        break;
      case "longBreak":
        setTimeLeft(longBreakTime * 5);
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

  console.log(progress);

  const countdownTimer = () => {
    if (timeLeft > 0) {
      setTimeLeft((prev) => prev - 1);
      dispatch(incProgress(progress + 1));
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

  const changeModeStyles = (
    e: React.BaseSyntheticEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setTextContentButton("Start");
    wrapperPageRef.current?.classList.remove("green", "blue", "red");
    wrapperPageRef.current?.classList.add(e.target.dataset.color);

    pomodoroMode.current?.classList.remove("active");
    shortBreakMode.current?.classList.remove("active");
    longBreakMode.current?.classList.remove("active");

    e.target.classList.add("active");

    dispatch(changeMode(e.target.dataset.mode));
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
        <ButtonTab
          mode="focus"
          color="red"
          clickHandler={changeModeStyles}
          refProp={pomodoroMode}
        >
          Pomodoro
        </ButtonTab>
        <ButtonTab
          mode="shortBreak"
          color="green"
          clickHandler={changeModeStyles}
          refProp={shortBreakMode}
        >
          Short Break
        </ButtonTab>
        <ButtonTab
          mode="longBreak"
          color="blue"
          clickHandler={changeModeStyles}
          refProp={longBreakMode}
        >
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
