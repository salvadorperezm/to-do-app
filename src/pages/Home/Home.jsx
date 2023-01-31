import { Box, Button, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Task } from "../../components";
import { HomeLayout } from "../../layout";
import {
  container,
  contentContainer,
  formContainer,
  headerText,
  headerTitle,
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

  return (
    <HomeLayout>
      <Box {...container}>
        <Box {...contentContainer}>
          <Box {...headerTitle}>
            <Text {...headerText}>To-Do List</Text>
          </Box>
          <Box {...formContainer}>
            <Input placeholder="Add a new task" />
            <Button>+</Button>
          </Box>
          <Box {...tasksContainer}>
            {tasks.map((task, index) => (
              <Task key={index} task={task} index={index} />
            ))}
          </Box>
        </Box>
      </Box>
    </HomeLayout>
  );
};
