import { Flex, Heading } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Heading as="h3" margin="0" paddint="0" fontWeight='400' fontSize='16px'>
        #1
      </Heading>
      <Heading as="h2" margin="0" paddint="0" fontSize='20px'>
        Time to focus!
      </Heading>
    </Flex>
  );
};

export default Footer;
