import { Box } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import TaskItemsContext from "../context/TaskItemsContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { taskItems } = useContext(TaskItemsContext);

  return (
    <Box width="full">
      <AnimatePresence mode="popLayout">
        {taskItems.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </AnimatePresence>
    </Box>
  );
};

export default TaskList;
