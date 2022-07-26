import { Flex, Button, Heading } from "@chakra-ui/react";
import "./Main.scss";

const Main = () => {
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
          className="main__option active"
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
      <Heading as="h2" fontSize="120px" margin="20px 0px">
        25:00
      </Heading>
      <Button
        className="main__option"
        fontSize="30px"
        padding='10px 20px'
        borderRadius="10px"
        fontWeight="500"
        width="190px"
        height="55px"
        background="white"
        border="none"
        color="#DC665F"
        cursor="pointer"
      >
        Start
      </Button>
    </Flex>
  );
};
export default Main;
