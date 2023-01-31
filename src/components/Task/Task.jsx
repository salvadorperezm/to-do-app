import { Box, Checkbox, Text } from "@chakra-ui/react";
import { TaskMenu } from "../Menu";

import { checkbox, container, lineThroughText, taskTitle } from "./TaskStyles";

export const Task = ({ task }) => {
  const trimTaskTitle = (taskTitle) => {
    const maxNumOfLetters = 30;
    if (taskTitle.length > maxNumOfLetters) {
      return `${taskTitle.slice(0, maxNumOfLetters)}...`;
    }

    return taskTitle;
  };

  return (
    <Box {...container}>
      {task.isCompleted ? (
        <>
          <Checkbox defaultChecked {...checkbox} />
          <Text {...lineThroughText} {...taskTitle}>
            {trimTaskTitle(task.title)}
          </Text>
        </>
      ) : (
        <>
          <Checkbox {...checkbox} />
          <Text {...taskTitle}>{trimTaskTitle(task.title)}</Text>
        </>
      )}
      <TaskMenu task={task} />
    </Box>
  );
};
