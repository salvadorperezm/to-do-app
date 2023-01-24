import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    main: "#0075f2",
    black: "#000000",
    white: {
      400: "#fcfcfc",
      900: "#ffffff",
    },
    grey: {
      400: "#e3e1e1",
      900: "#d1d1d1",
    },
  },
});

export default theme;
