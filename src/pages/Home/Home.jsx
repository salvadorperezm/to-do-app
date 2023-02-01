import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
} from "@chakra-ui/react";
import * as Yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Task } from "../../components";
import { HomeLayout } from "../../layout";
import {
  addTaskButton,
  container,
  contentContainer,
  formContainer,
  headerText,
  headerTitle,
  noTasksText,
  tasksContainer,
} from "./HomeStyles";

export const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

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
      } catch (error) {
        console.error(error);
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
            <FormControl>
              <Input
                placeholder="Add a new task"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
            </FormControl>
            <Button onClick={formik.handleSubmit} {...addTaskButton}>
              +
            </Button>
          </Box>
          <Box {...tasksContainer}>
            {tasks && tasks.length > 0 ? (
              tasks.map((task) => <Task key={task.id} task={task} />)
            ) : (
              <Text {...noTasksText}>No tasks yet</Text>
            )}
          </Box>
        </Box>
      </Box>
    </HomeLayout>
  );
};
