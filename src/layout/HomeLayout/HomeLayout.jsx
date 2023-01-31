import { Box } from "@chakra-ui/react";

import { FooterForm, Header } from "../../components";
import { container, content, footer, header } from "./HomeLayoutStyles";

export const HomeLayout = ({ children }) => {
  return (
    <Box {...container}>
      <Header {...header} />
      <Box {...content}>{children}</Box>
      <FooterForm {...footer} />
    </Box>
  );
};
