import { Checkbox, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Task from "../entities/Task";
import AnimatedTaskLabel from "./AnimatedTaskLabel";

interface TaskItemProps {
  task: Task;
  onToggleDone: () => void;
}

const AnimatedHStack = motion(HStack);

const TaskItem = ({ task, onToggleDone }: TaskItemProps) => {
  return (
    <AnimatedHStack
      width="100%"
      gap={4}
      py={1}
      px={2}
      initial={{ scale: 0 }}
      animate={{
        scale: "100%",
        transition: {
          type: "spring",
        },
      }}
    >
      <Checkbox
        size="lg"
        isChecked={task.done}
        onChange={() => onToggleDone()}
      />
      <AnimatedTaskLabel label={task.label} done={task.done} />
    </AnimatedHStack>
  );
};

export default TaskItem;
