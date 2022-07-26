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
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hook";
import {
  changeAutoStartBreaks,
  changeAutoStartPomodoros,
  changeFocusTime,
  changeLongBreakInterval,
  changeLongBreakTime,
  changeShortBreakTime,
} from "../../slices/timerSlice/timerSlice";
import {
  changeAlarmSound,
  changeAlarmVolume,
  changeRepeat,
  changeTickingSound,
  changeTickingVolume,
} from "../../slices/volumeSlice/volumeSlice";

interface SettingsProps {
  isOpenSetting: boolean;
  onCloseSetting: () => void;
}

const Settings = ({ isOpenSetting, onCloseSetting }: SettingsProps) => {
  const dispatch = useAppDispatch();
  const {
    focusTime,
    shortBreakTime,
    longBreakTime,
    isAutoStartBreaks,
    isAutoStartPomodoros,
    longBreakInterval,
  } = useAppSelector((state) => state.timer);

  const { alarmSound, alarmVolume, repeat, tickingSound, tickingVolume } =
    useAppSelector((state) => state.volume);

  return (
    <Modal isOpen={isOpenSetting} onClose={onCloseSetting}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>TIMER SETTINGS</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" flexDirection="column" gap="20px">
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
                value={focusTime}
                onChange={(e) => dispatch(changeFocusTime(+e))}
                min={1}
                max={50}
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
                value={shortBreakTime}
                onChange={(e) => dispatch(changeShortBreakTime(+e))}
                min={1}
                max={50}
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
                value={longBreakTime}
                onChange={(e) => dispatch(changeLongBreakTime(+e))}
                min={1}
                max={50}
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
            <Switch
              id="auto-start-breaks"
              size="md"
              isChecked={isAutoStartBreaks}
              onChange={(e) =>
                dispatch(changeAutoStartBreaks(e.target.checked))
              }
            />
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
            <Switch
              id="auto-start-pomodoros"
              size="md"
              isChecked={isAutoStartPomodoros}
              onChange={(e) =>
                dispatch(changeAutoStartPomodoros(e.target.checked))
              }
            />
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
              value={longBreakInterval}
              onChange={(e) => dispatch(changeLongBreakInterval(+e))}
              min={1}
              max={12}
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
              <Select
                maxWidth="200px"
                id="alarm-sound"
                onChange={(e) => dispatch(changeAlarmSound(e.target.value))}
                value={alarmSound}
              >
                <option value="digital">Digital</option>
                <option value="bell">Bell</option>
              </Select>
              <Box pt={6} pb={2}>
                <Slider
                  aria-label="slider-ex-6"
                  value={alarmVolume}
                  onChange={(val) => dispatch(changeAlarmVolume(val))}
                >
                  <SliderMark
                    value={alarmVolume}
                    textAlign="center"
                    bg="transparrent"
                    color="blue.500"
                    mt="-10"
                    ml="-5"
                    w="12"
                  >
                    {alarmVolume}
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
                  value={repeat}
                  onChange={(val) => dispatch(changeRepeat(val))}
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
              <Select
                maxWidth="250px"
                width="100%"
                id="ticking-sound"
                onChange={(e) => dispatch(changeTickingSound(e.target.value))}
                value={tickingSound}
              >
                <option value="none">None</option>
                <option value="ticking-fast">Ticking Fast</option>
                <option value="ticking-slow">Ticking Slow</option>
              </Select>
              <Box pt={6} pb={2}>
                <Slider
                  value={tickingVolume}
                  onChange={(val) => dispatch(changeTickingVolume(val))}
                >
                  <SliderMark
                    value={tickingVolume}
                    textAlign="center"
                    bg="transparrent"
                    color="blue.500"
                    mt="-10"
                    ml="-5"
                    w="12"
                  >
                    {tickingVolume}
                  </SliderMark>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </Box>
            </Flex>
          </FormControl>
          <Button
            m="0 auto 0 auto"
            maxW="90px"
            colorScheme="blue"
            mr={3}
            onClick={onCloseSetting}
          >
            Ok
          </Button>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Settings;
