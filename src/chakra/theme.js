import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "768p",
  lg: "960px",
  xl: "1200px",
};

const colors = {
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
};

const customTheme = extendTheme({
  breakpoints,
});

const theme = extendTheme({ customTheme, colors });

export default theme;
