import { Box, Link, Text } from "@chakra-ui/react";

import { Logo } from "../Logo";
import { container, logo } from "./HeaderStyles";

import { HeaderMenu } from "../Menu";

export const Header = () => {
  return (
    <Box {...container}>
      <Logo />
      <HeaderMenu />
    </Box>
  );
};
