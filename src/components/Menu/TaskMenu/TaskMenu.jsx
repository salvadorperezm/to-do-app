import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { SlOptions } from "react-icons/sl";
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { UpdateTaskModal, DeleteTaskModal } from "../../Modal";

export const TaskMenu = ({ task, fetchTasks }) => {
  const {
    isOpen: isUpdateOpen,
    onOpen: onUpdateOpen,
    onClose: onUpdateClose,
  } = useDisclosure();

  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();

  return (
    <Menu isLazy>
      <MenuButton as={IconButton} icon={<SlOptions />} variant={"ghost"} />
      <MenuList>
        <MenuItem icon={<AiOutlineEdit />} onClick={onUpdateOpen}>
          Update Task
        </MenuItem>
        <MenuItem icon={<BsTrash />} onClick={onDeleteOpen}>
          Delete Task
        </MenuItem>
      </MenuList>
      {isUpdateOpen && (
        <UpdateTaskModal
          task={task}
          isOpen={isUpdateOpen}
          onOpen={onUpdateOpen}
          onClose={onUpdateClose}
          fetchTasks={fetchTasks}
        />
      )}
      {isDeleteOpen && (
        <DeleteTaskModal
          task={task}
          isOpen={isDeleteOpen}
          onOpen={onDeleteOpen}
          onClose={onDeleteClose}
          fetchTasks={fetchTasks}
        />
      )}
    </Menu>
  );
};
