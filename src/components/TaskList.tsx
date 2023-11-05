import { List, ListItem } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import TaskItemsContext from "../context/TaskItemsContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { taskItems } = useContext(TaskItemsContext);

  // BUG: Animations are not working
  return (
    <List width="full">
      <AnimatePresence>
        {taskItems.map((task, index) => (
          <ListItem key={index}>
            <TaskItem task={task} />
          </ListItem>
        ))}
      </AnimatePresence>
    </List>
  );
};

export default TaskList;
