import { Box, Text } from "@chakra-ui/react";
import { HeaderForm } from "../../components";
import { FooterForm } from "../../components/Footer/FooterForm/FooterForm";

import { content, footer, header, mainContainer } from "./FormLayoutStyles";

export const FormLayout = ({ children }) => {
  return (
    <Box {...mainContainer}>
      <HeaderForm {...header} />
      <Box {...content}>{children}</Box>
      <FooterForm {...footer} />
    </Box>
  );
};
