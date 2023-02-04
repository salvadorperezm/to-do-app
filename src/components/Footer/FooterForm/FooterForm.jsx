import { Box, Text, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { AiFillGithub } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

import {
  icon,
  iconsContainer,
  mailIcon,
  mainContainer,
  textContainer,
} from "./FooterFormStyles";

export const FooterForm = () => {
  return (
    <Box {...mainContainer}>
      <Box {...textContainer}>
        <Link isExternal href={"mailto:salvadorperezm115@gmail.com"}>
          @salvadorperezm <ExternalLinkIcon />
        </Link>
      </Box>
      <Box {...iconsContainer}>
        <Link isExternal href="mailto:salvadorperezm115@gmail.com">
          <Box {...mailIcon}>
            <GrMail {...icon} />
          </Box>
        </Link>
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
