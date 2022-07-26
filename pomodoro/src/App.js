import { Flex } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <Flex
      flexDirection="column"
      gap="20px"
      background="#db524d"
      color="white"
      width="100vw"
      height="100vh"
      overflow='hidden'
      alignItems='center'
    >
      <Header />
      <Main />
    </Flex>
  );
}

export default App;
