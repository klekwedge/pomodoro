import { Flex } from "@chakra-ui/react";
import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from '../Footer/Footer';


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
      <Footer/>
    </Flex>
  );
}

export default App;
