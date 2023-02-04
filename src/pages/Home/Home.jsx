import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import * as Yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useLayoutEffect, useState } from "react";
import { Task } from "../../components";
import { HomeLayout } from "../../layout";
import {
  addTaskButton,
  container,
  contentContainer,
  formContainer,
  headerText,
  headerTitle,
  noTasksContainer,
  noTasksText,
  spinner,
  spinnerContainer,
  tasksContainer,
} from "./HomeStyles";

export const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSpinnerLoading, setIsSpinnerLoading] = useState(false);

  const toast = useToast();

  useLayoutEffect(() => {
    fetchTasksWithSpinnerAnimation();
  }, []);

  const fetchTasksWithSpinnerAnimation = async () => {
    setIsSpinnerLoading(true);
    try {
      const URL = import.meta.env.VITE_API_URL;
      const user = JSON.parse(localStorage.getItem("user"));
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.get(`${URL}/api/users/${user.id}/tasks`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setTasks(response.data);
      setIsSpinnerLoading(false);
    } catch (error) {
      console.error(error);
      setIsSpinnerLoading(false);
    }
  };

  const fetchTasks = async () => {
    try {
      const URL = import.meta.env.VITE_API_URL;
      const user = JSON.parse(localStorage.getItem("user"));
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.get(`${URL}/api/users/${user.id}/tasks`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Task is required"),
    }),
    onSubmit: async (values, actions) => {
      setIsLoading(true);
      try {
        const URL = import.meta.env.VITE_API_URL;
        const user = JSON.parse(localStorage.getItem("user"));
        const accessToken = localStorage.getItem("accessToken");
        await axios.post(`${URL}/api/users/${user.id}/tasks`, values, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        actions.resetForm();
        fetchTasks();
        setIsLoading(false);
      } catch (error) {
        toast({
          title: "An error occurred.",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        setIsLoading(false);
      }
    },
  });

  return (
    <HomeLayout>
      <Box {...container}>
        <Box {...contentContainer}>
          <Box {...headerTitle}>
            <Text {...headerText}>To-Do List</Text>
          </Box>
          <Box {...formContainer} as={"form"}>
            <FormControl
              isInvalid={formik.errors.title && formik.touched.title}
            >
              <Input
                type={"text"}
                placeholder="Add a new task"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
            </FormControl>
            <Button
              onClick={formik.handleSubmit}
              {...addTaskButton}
              isLoading={isLoading}
            >
              +
            </Button>
          </Box>
          {isSpinnerLoading ? (
            <Box {...spinnerContainer}>
              <Spinner {...spinner} />
            </Box>
          ) : tasks && tasks.length > 0 ? (
            <Box {...tasksContainer}>
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  fetchTasks={fetchTasks}
                  fetchTasksWithSpinnerAnimation={
                    fetchTasksWithSpinnerAnimation
                  }
                />
              ))}
            </Box>
          ) : (
            <Box {...noTasksContainer}>
              <Text {...noTasksText}>No tasks yet</Text>
            </Box>
          )}
        </Box>
      </Box>
    </HomeLayout>
  );
};
