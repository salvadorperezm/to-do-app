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
import { deleteOptionIcon, deleteOptionText } from "./TaskMenuStyles";

export const TaskMenu = ({ task, fetchTasksWithSpinnerAnimation }) => {
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
        {!task.isCompleted && (
          <MenuItem icon={<AiOutlineEdit />} onClick={onUpdateOpen}>
            Update Task
          </MenuItem>
        )}
        <MenuItem
          icon={<BsTrash {...deleteOptionIcon} />}
          onClick={onDeleteOpen}
          {...deleteOptionText}
        >
          Delete Task
        </MenuItem>
      </MenuList>
      {isUpdateOpen && (
        <UpdateTaskModal
          task={task}
          isOpen={isUpdateOpen}
          onOpen={onUpdateOpen}
          onClose={onUpdateClose}
          fetchTasksWithSpinnerAnimation={fetchTasksWithSpinnerAnimation}
        />
      )}
      {isDeleteOpen && (
        <DeleteTaskModal
          task={task}
          isOpen={isDeleteOpen}
          onOpen={onDeleteOpen}
          onClose={onDeleteClose}
          fetchTasksWithSpinnerAnimation={fetchTasksWithSpinnerAnimation}
        />
      )}
    </Menu>
  );
};
