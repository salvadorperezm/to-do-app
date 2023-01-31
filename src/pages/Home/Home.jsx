import { Box, Button, Input, Text } from "@chakra-ui/react";
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
  const tasks = [
    {
      id: 1,
      title: "This is a really long name to see what happens in this case",
      isCompleted: false,
    },
    {
      id: 2,
      title: "task 1",
      isCompleted: false,
    },
    {
      id: 3,
      title: "task 1",
      isCompleted: true,
    },
    {
      id: 4,
      title: "task 1",
      isCompleted: false,
    },
    {
      id: 5,
      title: "task 1",
      isCompleted: true,
    },
    {
      id: 6,
      title: "task 1",
      isCompleted: true,
    },
    {
      id: 7,
      title: "task 1",
      isCompleted: false,
    },
    {
      id: 8,
      title: "task 1",
      isCompleted: true,
    },
    {
      id: 9,
      title: "task 1",
      isCompleted: false,
    },
    {
      id: 10,
      title: "task 1",
      isCompleted: false,
    },
    {
      id: 11,
      title: "task 1",
      isCompleted: true,
    },
    {
      id: 12,
      title: "task 1",
      isCompleted: false,
    },
  ];

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
