import {
  Flex,
  Button,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import {
  AiOutlineSetting,
  AiOutlineBarChart,
  AiOutlineClockCircle,
  AiOutlineCalendar,
  AiOutlineFire,
} from "react-icons/ai";

const Header = () => {
  const {
    isOpen: isOpenReport,
    onOpen: onOpenReport,
    onClose: onCloseReport,
  } = useDisclosure();

  return (
    <>
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
            display="flex"
            gap="5px"
            onClick={onOpenReport}
            _hover="none"
          >
            <AiOutlineBarChart size="20px" />
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
            display="flex"
            gap="5px"
          >
            <AiOutlineSetting size="20px" />
            Settings
          </Button>
        </Flex>
      </Flex>

      <Modal isOpen={isOpenReport} onClose={onCloseReport}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody padding="50px 30px 50px 30px">
            <Tabs>
              <TabList borderRadius='5px' border="1px solid #E7AFAD" height="40px" mb="20px">
                <Tab
                  _selected={{ color: "white", bg: "#E19B99" }}
                  color="#E19B99"
                  width="50%"
                  borderRadius='5px 0px 0px 5px'
                >
                  Summary
                </Tab>
                <Tab
                  _selected={{ color: "white", bg: "#E19B99" }}
                  color="#E19B99"
                  width="50%"
                  borderRadius='0px 5px 5px 0px'
                >
                  Detail
                </Tab>
              </TabList>
              <TabPanels>
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
                      <Flex
                        flexDirection="column"
                        gap="5px"
                        alignItems="flex-end"
                      >
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
                      <Flex
                        flexDirection="column"
                        gap="5px"
                        alignItems="flex-end"
                      >
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
                      <Flex
                        flexDirection="column"
                        gap="5px"
                        alignItems="flex-end"
                      >
                        <span>--</span>
                        <span>day streak</span>
                      </Flex>
                    </Flex>
                  </Flex>
                </TabPanel>
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
                      <Heading as="Аh4" fontSize="14px" fontWeight="400">
                        MINUTES
                      </Heading>
                    </Flex>
                  </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onCloseReport}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Header;
