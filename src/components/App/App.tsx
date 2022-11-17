import { useRef } from "react";
import { Flex } from "@chakra-ui/react";
import "./App.scss";

import Header from "../Header/Header";
import Main from "../Timer/Timer";
import Footer from "../Footer/Footer";

function App() {
  const wrapperPageRef = useRef(null);

  return (
    <Flex
      ref={wrapperPageRef}
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
      <Main wrapperPageRef={wrapperPageRef} />
      <Footer />
    </Flex>
  );
}

export default App;
