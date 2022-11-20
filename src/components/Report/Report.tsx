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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import {
  AiOutlineClockCircle,
  AiOutlineCalendar,
  AiOutlineFire,
} from "react-icons/ai";
import Detail from "../Detail/Detail";
import Summary from "../Summary/Summary";

interface ReportProps {
  isOpenReport: boolean;
  onCloseReport: () => void;
}

const Report = ({ isOpenReport, onCloseReport }: ReportProps) => {
  return (
    <Modal isOpen={isOpenReport} onClose={onCloseReport}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody padding="50px 30px 50px 30px">
          <Tabs>
            <TabList
              borderRadius="5px"
              border="1px solid #E7AFAD"
              height="40px"
              mb="20px"
            >
              <Tab
                _selected={{ color: "white", bg: "#E19B99" }}
                color="#E19B99"
                width="50%"
                borderRadius="5px 0px 0px 5px"
              >
                Summary
              </Tab>
              <Tab
                _selected={{ color: "white", bg: "#E19B99" }}
                color="#E19B99"
                width="50%"
                borderRadius="0px 5px 5px 0px"
              >
                Detail
              </Tab>
            </TabList>
            <TabPanels>
              <Summary />
              <Detail />
            </TabPanels>
          </Tabs>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onCloseReport}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Report;
