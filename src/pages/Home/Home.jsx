import { Box, Button, Input, Text } from "@chakra-ui/react";
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
      title: "task 1",
    },
    {
      id: 2,
      title: "task 1",
    },
    {
      id: 3,
      title: "task 1",
    },
    {
      id: 4,
      title: "task 1",
    },
    {
      id: 5,
      title: "task 1",
    },
    {
      id: 6,
      title: "task 1",
    },
    {
      id: 7,
      title: "task 1",
    },
    {
      id: 8,
      title: "task 1",
    },
    {
      id: 9,
      title: "task 1",
    },
    {
      id: 10,
      title: "task 1",
    },
    {
      id: 11,
      title: "task 1",
    },
    {
      id: 12,
      title: "task 1",
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
            <Button>Add</Button>
          </Box>
          <Box {...tasksContainer}>
            {tasks.map((task, index) => (
              <Text key={index}>task.title</Text>
            ))}
          </Box>
        </Box>
      </Box>
    </HomeLayout>
  );
};
