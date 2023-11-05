import { Checkbox, HStack, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useContext } from "react";
import { FiTrash2 } from "react-icons/fi";
import TaskItemsContext from "../context/TaskItemsContext";
import Task from "../entities/Task";
import AnimatedTaskLabel from "./AnimatedTaskLabel";
import SwipeableBox from "./SwipeableBox";

const AnimatedHStack = motion(HStack);

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const { dispatch } = useContext(TaskItemsContext);

  return (
    <SwipeableBox
      onSwipe={() => dispatch({ type: "REMOVE", task })}
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
        <Checkbox
          size="lg"
          isChecked={task.done}
          onChange={() => dispatch({ type: "TOGGLE", task })}
        />
        <AnimatedTaskLabel label={task.label} done={task.done} />
      </AnimatedHStack>
    </SwipeableBox>
  );
};

export default TaskItem;
