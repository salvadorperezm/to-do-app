import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

import { container, deleteButton } from "./DeleteTaskModalStyles";

export const DeleteTaskModal = ({
  task,
  isOpen,
  onOpen,
  onClose,
  fetchTasks,
}) => {
  const toast = useToast();
  const deleteTask = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL;
      const user = JSON.parse(localStorage.getItem("user"));
      const accessToken = localStorage.getItem("accessToken");
      await axios.delete(`${URL}/api/users/${user.id}/tasks/${task.id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      fetchTasks();
      onClose();
    } catch (error) {
      toast({
        title: "An error occurred.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent {...container}>
        <ModalHeader>Delete Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Are you sure? This can't be undone</Text>
        </ModalBody>

        <ModalFooter>
          <Button {...deleteButton} onClick={deleteTask}>
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
