import { Box, Text } from "@chakra-ui/react";
import { HomeLayout } from "../../layout";
import { container } from "./HomeStyles";

export const Home = () => {
  return (
    <HomeLayout>
      <Box {...container}>
        <Text>Home page</Text>
      </Box>
    </HomeLayout>
  );
};
