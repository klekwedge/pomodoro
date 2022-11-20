import { Flex, Heading, TabPanel } from "@chakra-ui/react";

const Detail = () => {
  return (
    <TabPanel padding="0">
      <Heading as="h3" fontSize="18px" mb="20px">
        Focus Time Detail
      </Heading>
      <Flex flexDirection="column">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          color="gray"
          borderBottom="1px solid gray"
          pb="10px"
        >
          <Heading as="h4" fontSize="14px" fontWeight="400">
            DATE
          </Heading>
          <Heading as="h4" fontSize="14px" fontWeight="400">
            MINUTES
          </Heading>
        </Flex>
      </Flex>
    </TabPanel>
  );
};

export default Detail;
