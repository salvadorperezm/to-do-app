import { Box, Link, Text } from "@chakra-ui/react";

import { container, headerTitle } from "./HeaderStyles";
import { useAuth } from "../../utils/auth";

export const Header = () => {
  const auth = useAuth();
  return (
    <Box {...container}>
      <Text {...headerTitle}>To-Do App</Text>
      <Link onClick={auth.logout}>Logout</Link>
    </Box>
  );
};
