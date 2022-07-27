import { Flex, ChakraProvider } from "@chakra-ui/react";
import "./App.scss";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <ChakraProvider>
      <Flex
        className="wrapper-page red"
        flexDirection="column"
        gap="20px"
        background="#db524d"
        color="white"
        width="100vw"
        height="100vh"
        overflow="hidden"
        alignItems="center"
      >
        <Header />
        <Main />
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
