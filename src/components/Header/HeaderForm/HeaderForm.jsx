import { Box } from "@chakra-ui/react";

import { Logo } from "../../Logo";
import { container } from "./HeaderFormStyles";

export const HeaderForm = () => {
  return (
    <Box {...container}>
      <Logo />
    </Box>
  );
};
