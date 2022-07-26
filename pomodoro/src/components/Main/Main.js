import { Flex, Button, Heading } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import "./Main.scss";

const Main = () => {
  const [textContentButton, setTextContentButton] = useState("Start");
  const [timeForFocus, setTimeForFocus] = useState(25);

  const minutesRef = useRef();
  const secondsRef = useRef();

  let timerId = null;

  const test = (e) => {
    setTextContentButton(textContentButton === "Start" ? "Stop" : "Start");
  };

  // const deadline = new Date();
  // deadline.setMinutes(deadline.getMinutes() + timeForFocus);
  // timerId = setInterval(countdownTimer, 1000);

  // function countdownTimer() {
  //   const diff = deadline - new Date();

  //   if (diff <= 0) {
  //     clearInterval(timerId);
  //   }

  //   const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
  //   const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

  //   if (minutesRef.current) {
  //     minutesRef.current.textContent = minutes < 10 ? "0" + minutes : minutes;
  //   }
  //   if (secondsRef.current) {
  //     secondsRef.current.textContent = seconds < 10 ? "0" + seconds : seconds;
  //   }
  // }

  return (
    <Flex
      flexDirection="column"
      background="#DF645F"
      padding="20px 80px"
      alignItems="center"
      borderRadius="10px"
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
        >
          Long Break
        </Button>
      </Flex>
      <Flex gap="10px" alignItems="center">
        <Heading as="h3" fontSize="120px" margin="20px 0px" ref={minutesRef}>
          25
        </Heading>
        <Heading as="h3" fontSize="120px" margin="20px 0px">
          :
        </Heading>
        <Heading as="h3" fontSize="120px" margin="20px 0px" ref={secondsRef}>
          00
        </Heading>
      </Flex>
      <Button
        className="main__option"
        fontSize="30px"
        padding="10px 20px"
        borderRadius="10px"
        fontWeight="500"
        width="190px"
        height="55px"
        background="white"
        border="none"
        color="#DC665F"
        cursor="pointer"
        onClick={(e) => test(e)}
      >
        {textContentButton}
      </Button>
    </Flex>
  );
};
export default Main;
