import { Box, Text } from "@chakra-ui/react";
import { FooterForm } from "../../components/Footer/FooterForm/FooterForm";

import { content, footer, mainContainer } from "./FormLayoutStyles";

export const FormLayout = ({ children }) => {
  return (
    <Box {...mainContainer}>
      <Box {...content}>{children}</Box>
      <FooterForm {...footer} />
    </Box>
  );
};
