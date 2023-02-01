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
  useToast,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { useFormik } from "formik";

import { container, updateButton } from "./UpdateTaskModalStyles";
import axios from "axios";
import { useState } from "react";

export const UpdateTaskModal = ({
  task,
  isOpen,
  onClose,
  fetchTasksWithSpinnerAnimation,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      title: task.title,
      isCompleted: task.isCompleted,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
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
        setIsLoading(false);
        fetchTasksWithSpinnerAnimation();
        onClose();
        toast({
          position: "top",
          title: "Task updated.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        setIsLoading(false);
        toast({
          title: "An error occurred.",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
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
          <Button
            {...updateButton}
            onClick={formik.handleSubmit}
            isLoading={isLoading}
          >
            Update
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
