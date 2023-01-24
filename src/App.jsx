import { ChakraProvider } from "@chakra-ui/react";

import theme from "./chakra/theme";

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <div className="App"></div>
    </ChakraProvider>
  );
}

export default App;
