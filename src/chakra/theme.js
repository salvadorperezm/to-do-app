import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
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
  breakpoints: {
    sm: "320px",
    md: "768p",
    lg: "960px",
    xl: "1200px",
  },
});

const theme = extendTheme({ customTheme });

export default theme;
