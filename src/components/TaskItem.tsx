import { Checkbox, HStack, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiTrash2 } from "react-icons/fi";
import Task from "../entities/Task";
import AnimatedTaskLabel from "./AnimatedTaskLabel";
import SwipeableBox from "./SwipeableBox";

interface TaskItemProps {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

const AnimatedHStack = motion(HStack);

const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
  return (
    <SwipeableBox
      onSwipe={onDelete}
      backElement={
        <AnimatedHStack
          w="full"
          h="full"
          bg="red.500"
          pr={3}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Icon as={FiTrash2} boxSize={6} />
        </AnimatedHStack>
      }
    >
      <AnimatedHStack
        w="full"
        h="full"
        gap={4}
        py={2}
        px={2}
        backgroundColor={"gray.800"}
      >
        <Checkbox size="lg" isChecked={task.done} onChange={() => onToggle()} />
        <AnimatedTaskLabel label={task.label} done={task.done} />
      </AnimatedHStack>
    </SwipeableBox>
  );
};

export default TaskItem;
