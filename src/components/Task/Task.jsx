import { Box, Checkbox, Text } from "@chakra-ui/react";
import axios from "axios";
import { TaskMenu } from "../Menu";

import { checkbox, container, lineThroughText, taskTitle } from "./TaskStyles";

export const Task = ({ task, fetchTasks }) => {
  const trimTaskTitle = (taskTitle) => {
    const maxNumOfLetters = 30;
    if (taskTitle.length > maxNumOfLetters) {
      return `${taskTitle.slice(0, maxNumOfLetters)}...`;
    }

    return taskTitle;
  };

  const updateTaskStatus = async (taskStatus, taskTitle) => {
    try {
      const URL = import.meta.env.VITE_API_URL;
      const user = JSON.parse(localStorage.getItem("user"));
      const accessToken = localStorage.getItem("accessToken");
      await axios.patch(
        `${URL}/api/users/${user.id}/tasks/${task.id}`,
        {
          title: taskTitle,
          isCompleted: !taskStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box {...container}>
      {task.isCompleted ? (
        <>
          <Checkbox
            defaultChecked
            {...checkbox}
            onChange={() => updateTaskStatus(task.isCompleted, task.title)}
          />
          <Text {...lineThroughText} {...taskTitle}>
            {trimTaskTitle(task.title)}
          </Text>
        </>
      ) : (
        <>
          <Checkbox
            {...checkbox}
            onChange={() => updateTaskStatus(task.isCompleted, task.title)}
          />
          <Text {...taskTitle}>{trimTaskTitle(task.title)}</Text>
        </>
      )}
      <TaskMenu task={task} fetchTasks={fetchTasks} />
    </Box>
  );
};
