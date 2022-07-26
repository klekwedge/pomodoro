import { Flex, Button, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      padding="10px 0px 0px 0px"
      margin="0px 0px 20px 0px"
      alignItems="center"
      gap="200px"
      justifyContent="space-between"
    >
      <Heading margin="0" paddint="0">
        Pomodoro
      </Heading>
      <Flex gap="10px">
        <Button
          borderRadius="10px"
          color="white"
          padding="10px 10px"
          border="none"
          background="#e1716d"
          fontSize="16px"
          cursor="pointer"
        >
          Report
        </Button>
        <Button
          borderRadius="10px"
          color="white"
          padding="10px 10px"
          border="none"
          background="#e1716d"
          fontSize="16px"
          cursor="pointer"
        >
          Settings
        </Button>
        <Button
          borderRadius="10px"
          color="white"
          padding="10px 10px"
          border="none"
          background="#e1716d"
          fontSize="16px"
          cursor="pointer"
        >
          Login
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
