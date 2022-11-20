import { Flex, Heading } from "@chakra-ui/react";
import { useAppSelector } from "../../hooks/redux-hook";

const Footer = () => {
  const { currentRound, mode } = useAppSelector((state) => state.timer);
  return (
    <Flex flexDirection="column" alignItems="center">
      <Heading as="h3" margin="0" padding="0" fontWeight="400" fontSize="16px">
        #{currentRound}
      </Heading>
      <Heading as="h2" margin="0" padding="0" fontSize="20px">
        Time to {mode === "focus" ? "focus" : "break"}!
      </Heading>
    </Flex>
  );
};

export default Footer;
