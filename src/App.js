import {Container, VStack } from "@chakra-ui/react";
import DrawCanvas from "./components/DrawCanvas";

function App(props) {
  return (
      <Container>
          <DrawCanvas />
      </Container>
  );
}

export default App;
