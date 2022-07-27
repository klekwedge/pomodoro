import {
  Flex,
  Button,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";

import {
  AiOutlineSetting,
  AiOutlineBarChart,
  AiOutlineCheckCircle,
} from "react-icons/ai";

import Report from '../Report/Report';
import Settings from "../Settings/Settings";

const Header = () => {
  const {
    isOpen: isOpenReport,
    onOpen: onOpenReport,
    onClose: onCloseReport,
  } = useDisclosure();

  const {
    isOpen: isOpenSetting,
    onOpen: onOpenSetting,
    onClose: onCloseSetting,
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
        <Flex gap="5px" alignItems="center">
          <AiOutlineCheckCircle size="30px" />
          <Heading margin="0" paddint="0" fontSize="30px">
            Pomodoro
          </Heading>
        </Flex>

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
            onClick={onOpenSetting}
          >
            <AiOutlineSetting size="20px" />
            Settings
          </Button>
        </Flex>
      </Flex>

      <Report
        isOpenReport={isOpenReport}
        onCloseReport={onCloseReport}
      />

      <Settings
        isOpenSetting={isOpenSetting}
        onCloseSetting={onCloseSetting}
      />
    </>
  );
};

export default Header;
