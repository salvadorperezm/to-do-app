import { Box, Text, Link } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";

import { icon, iconsContainer, mainContainer } from "./FooterFormStyles";

export const FooterForm = () => {
  return (
    <Box {...mainContainer}>
      <Box>
        <Link isExternal href="https://github.com/salvadorperezm">
          @salvadorperezm
        </Link>
      </Box>
      <Box {...iconsContainer}>
        <Link isExternal href="https://github.com/salvadorperezm">
          <Box>
            <AiFillGithub {...icon} />
          </Box>
        </Link>
        <Link
          isExternal
          href="https://www.upwork.com/freelancers/~018af8c84df7c21c03"
        >
          <Box>
            <SiUpwork {...icon} />
          </Box>
        </Link>
        <Link isExternal href="https://discordapp.com/users/salva#4492">
          <Box>
            <FaDiscord {...icon} />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};
