import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import theme from "./chakra/theme";
import { Home, Login, Register } from "./pages";
import { AuthProvider } from "./utils/auth";
import { RequiredAuth } from "./components";

function App() {
  return (
    <AuthProvider>
      <ChakraProvider resetCSS theme={theme}>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <RequiredAuth>
                  <Home />
                </RequiredAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
