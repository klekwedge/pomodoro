import { Flex, Heading, TabPanel } from "@chakra-ui/react";
import { useAppSelector } from "../../hooks/redux-hook";

const Detail = () => {
  const { progress } = useAppSelector((state) => state.timer);

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
          mb="10px"
        >
          <Heading as="h4" fontSize="14px" fontWeight="400">
            DATE
          </Heading>
          <Heading as="h4" fontSize="14px" fontWeight="400">
            MINUTES
          </Heading>
        </Flex>
        {progress.length > 0
          ? progress.map((item) => (
              <Flex
                alignItems="center"
                justifyContent="space-between"
                color="gray"
                pb="10px"
                mb="10px"
                key={item.id}
              >
                <Heading as="h4" fontSize="14px" fontWeight="400">
                  {`${item.date}`}
                </Heading>
                <Heading as="h4" fontSize="14px" fontWeight="400">
                  {item.minutes}
                </Heading>
              </Flex>
            ))
          : null}
      </Flex>
    </TabPanel>
  );
};

export default Detail;
