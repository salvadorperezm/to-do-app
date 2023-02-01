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
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { useFormik } from "formik";

import { container, updateButton } from "./UpdateTaskModalStyles";
import axios from "axios";

export const UpdateTaskModal = ({ task, isOpen, onClose, fetchTasks }) => {
  const formik = useFormik({
    initialValues: {
      title: task.title,
      isCompleted: task.isCompleted,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
    }),
    onSubmit: async (values) => {
      try {
        const URL = import.meta.env.VITE_API_URL;
        const user = JSON.parse(localStorage.getItem("user"));
        const accessToken = localStorage.getItem("accessToken");
        await axios.patch(
          `${URL}/api/users/${user.id}/tasks/${task.id}`,
          values,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        fetchTasks();
        onClose();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent {...container} as={"form"}>
        <ModalHeader>Update Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isInvalid={formik.errors.title && formik.touched.title}>
            <Input
              type={"text"}
              name={"title"}
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button {...updateButton} onClick={formik.handleSubmit}>
            Update
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
