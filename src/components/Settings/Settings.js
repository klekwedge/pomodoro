import { useState } from "react";

import {
  Flex,
  Box,
  Button,
  Heading,
  Modal,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Switch,
  FormControl,
  FormLabel,
  Select,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";

const Settings = ({ isOpenSetting, onCloseSetting }) => {
  const [sliderValue, setSliderValue] = useState(50);
  const [sliderTickingValue, setSliderTickingValue] = useState(50);

  return (
    <Modal isOpen={isOpenSetting} onClose={onCloseSetting}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>TIMER SETTINGS</ModalHeader>
        <ModalCloseButton />
        <ModalBody
          display="flex"
          flexDirection="column"
          gap="20px"
          p="20px 40px"
        >
          <Heading as="h2" fontSize="20px">
            Time (minutes)
          </Heading>
          <Flex>
            <FormControl
              display="flex"
              alignItems="center"
              flexDirection="column"
              justifyContent="space-between"
              mb="10px"
            >
              <FormLabel htmlFor="pomodoro" mb="0" color="gray">
                Pomodoro
              </FormLabel>
              <NumberInput
                id="pomodoro"
                defaultValue={25}
                min={1}
                max={60}
                maxWidth="100px"
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl
              display="flex"
              alignItems="center"
              flexDirection="column"
              justifyContent="space-between"
              mb="10px"
            >
              <FormLabel htmlFor="short-break" mb="0" color="gray">
                Short Break
              </FormLabel>
              <NumberInput
                id="short-break"
                defaultValue={5}
                min={1}
                max={60}
                maxWidth="100px"
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl
              display="flex"
              alignItems="center"
              flexDirection="column"
              justifyContent="space-between"
              mb="10px"
            >
              <FormLabel htmlFor="long-break" mb="0" color="gray">
                Long Break
              </FormLabel>
              <NumberInput
                id="long-break"
                defaultValue={15}
                min={1}
                max={60}
                maxWidth="100px"
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </Flex>
          <FormControl
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb="10px"
          >
            <FormLabel htmlFor="auto-start-breaks" mb="0">
              Auto start Breaks?
            </FormLabel>
            <Switch id="auto-start-breaks" size="md" />
          </FormControl>
          <FormControl
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb="10px"
          >
            <FormLabel htmlFor="auto-start-pomodoros" mb="0">
              Auto start Pomodoros?
            </FormLabel>
            <Switch id="auto-start-pomodoros" size="md" />
          </FormControl>

          <FormControl
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb="10px"
          >
            <FormLabel htmlFor="long-break-interval" mb="0">
              Long Break interval
            </FormLabel>
            <NumberInput
              id="long-break-interval"
              defaultValue={4}
              min={1}
              max={60}
              maxWidth="100px"
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
            mb="10px"
          >
            <FormLabel htmlFor="alarm-sound" mb="0">
              Alarm Sound
            </FormLabel>
            <Flex flexDirection="column" gap="20px">
              <Select maxWidth="200px" id="alarm-sound">
                <option value="digital">Digital</option>
                <option value="bell">Bell</option>
              </Select>
              <Box pt={6} pb={2}>
                <Slider
                  aria-label="slider-ex-6"
                  onChange={(val) => setSliderValue(val)}
                >
                  <SliderMark
                    value={sliderValue}
                    textAlign="center"
                    bg="transparrent"
                    color="blue.500"
                    mt="-10"
                    ml="-5"
                    w="12"
                  >
                    {sliderValue}
                  </SliderMark>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </Box>
              <FormControl
                display="flex"
                alignItems="flex-start"
                flexDirection="column"
                mb="10px"
              >
                <FormLabel htmlFor="alarm-repeat" mb="0" color="gray">
                  Repeat
                </FormLabel>
                <NumberInput
                  id="alarm-repeat"
                  defaultValue={1}
                  min={1}
                  max={60}
                  maxWidth="100px"
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </Flex>
          </FormControl>

          <FormControl
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
            mb="10px"
          >
            <FormLabel htmlFor="ticking-sound" mb="0">
              Ticking Sound
            </FormLabel>
            <Flex flexDirection="column" gap="20px">
              <Select maxWidth="250px" width="100%" id="ticking-sound">
                <option value="none">None</option>
                <option value="ticking-fast">Ticking Fast</option>
                <option value="ticking-slow">Ticking Slow</option>
              </Select>
              <Box pt={6} pb={2}>
                <Slider onChange={(val) => setSliderTickingValue(val)}>
                  <SliderMark
                    value={sliderTickingValue}
                    textAlign="center"
                    bg="transparrent"
                    color="blue.500"
                    mt="-10"
                    ml="-5"
                    w="12"
                  >
                    {sliderTickingValue}
                  </SliderMark>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </Box>
            </Flex>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onCloseSetting}>
            Ok
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Settings;
