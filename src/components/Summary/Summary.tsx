import {
  Flex,
  Heading,
  TabPanel,
} from "@chakra-ui/react";

import {
  AiOutlineClockCircle,
  AiOutlineCalendar,
  AiOutlineFire,
} from "react-icons/ai";

const Summary = () => {
  return (
    <TabPanel padding="0">
      <Heading as="h3" fontSize="18px" mb="20px">
        Activity Summary
      </Heading>
      <Flex flexDirection="column" gap="10px">
        <Flex
          justifyContent="space-between"
          background="#F8E8E7"
          p="20px 20px"
          borderRadius="10px"
        >
          <AiOutlineClockCircle size="30px" fill="#E7AFAD" />
          <Flex flexDirection="column" gap="5px" alignItems="flex-end">
            <span>--</span>
            <span>hours focused</span>
          </Flex>
        </Flex>
        <Flex
          justifyContent="space-between"
          background="#F8E8E7"
          p="20px 20px"
          borderRadius="10px"
        >
          <AiOutlineCalendar size="30px" fill="#E7AFAD" />
          <Flex flexDirection="column" gap="5px" alignItems="flex-end">
            <span>--</span>
            <span>days accessed</span>
          </Flex>
        </Flex>
        <Flex
          justifyContent="space-between"
          background="#F8E8E7"
          p="20px 20px"
          borderRadius="10px"
        >
          <AiOutlineFire size="30px" fill="#E7AFAD" />
          <Flex flexDirection="column" gap="5px" alignItems="flex-end">
            <span>--</span>
            <span>day streak</span>
          </Flex>
        </Flex>
      </Flex>
    </TabPanel>
  );
};

export default Summary;
