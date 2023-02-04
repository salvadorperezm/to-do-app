import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { VscSettingsGear } from "react-icons/vsc";
import { GrLogout } from "react-icons/gr";

import { useAuth } from "../../../utils/auth";
import { settingsIcon } from "./HeaderMenuStyles";

export const HeaderMenu = () => {
  const auth = useAuth();

  return (
    <Menu isLazy>
      <MenuButton
        as={IconButton}
        icon={<VscSettingsGear />}
        variant={"ghost"}
        {...settingsIcon}
      />
      <MenuList>
        <MenuItem icon={<GrLogout />} onClick={auth.logout}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
