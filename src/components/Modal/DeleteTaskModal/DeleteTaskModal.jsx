import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Text,
} from "@chakra-ui/react";

import { container } from "./DeleteTaskModalStyles";

export const DeleteTaskModal = ({ task, isOpen, onOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent {...container}>
        <ModalHeader>Delete Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Are you want to delete task {task.id}? This is permanent</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose}>
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
