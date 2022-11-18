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
import ButtonTab from "../ButtonTab/ButtonTab";
import { AiFillStepForward } from "react-icons/ai";
import "./Timer.scss";

dayjs.extend(duration);

const Timer = ({ wrapperPageRef }: any) => {
  const { focusTime, shortBreakTime, longBreakTime } = useAppSelector(
    (state) => state.timer
  );

  const skipTimer = () => {
    setTimeLeft(0)
    onClose();
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const [textContentButton, setTextContentButton] = useState("Start");
  const [timeLeft, setTimeLeft] = useState(0);
  const [mode, setMode] = useState("focus");
  // const [progress, setProgress] = useState(0);
  let timer: any;

  useEffect(() => {
    document.querySelector(".main__option")?.classList.add("active");
  }, []);

  useEffect(() => {
    updateFavicon(mode);
    switch (mode) {
      case "focus":
        setTimeLeft(focusTime * 60);
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
  }, [mode, focusTime, shortBreakTime, longBreakTime]);

  const countdownTimer = () => {
    if (timeLeft !== 0) {
      setTimeLeft((prev) => prev - 1);
      // setProgress((prev) => prev + 1);
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

  const toggleTimer = () => {
    if (textContentButton === "Start") {
      setTextContentButton("Stop");
    } else if (textContentButton === "Stop") {
      setTextContentButton("Start");
    }
  };

  function formatTime(time: any) {
    return dayjs.duration(time, "seconds").format("mm:ss");
  }

  const changeMode = (e) => {
    setTextContentButton("Start");
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
