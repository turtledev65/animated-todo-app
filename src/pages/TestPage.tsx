import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import TaskItem from "../components/TaskItem";
import Task from "../entities/Task";

const TestPage = () => {
  const [task, setTask] = useState<Task>({
    label: "Finaly finish something",
    done: false,
  });

  return (
    <Flex direction="column" height="100vh" justify="center" align="center">
      <TaskItem
        task={task}
        onToggleDone={() => setTask({ ...task, done: !task.done })}
      />
    </Flex>
  );
};

export default TestPage;
