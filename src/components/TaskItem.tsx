import { Box, Checkbox, HStack, Icon, Input } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import Task from "../entities/Task";
import useTaskItems from "../hooks/useTaskItems";
import AnimatedTaskLabel from "./AnimatedTaskLabel";
import SwipeableBox from "./SwipeableBox";

const AnimatedBox = motion(Box);
const AnimatedHStack = motion(HStack);

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const { removeTask, toggleTask, editTask } = useTaskItems();
  const [isEditing, setIsEditing] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEditTask = () => {
    const newText = inputRef.current?.value;
    if (newText) {
      editTask(task, newText);
      setIsEditing(!isEditing);
    }
  };

  return (
    <AnimatedBox layout transition={{ type: "spring" }}>
      <SwipeableBox
        onSwipe={() => removeTask(task)}
        backElement={
          <AnimatedHStack
            w="full"
            h="full"
            bg="red"
            pr={3}
            justifyContent="flex-end"
            alignItems="center"
          >
            <Icon as={FiTrash2} boxSize={6} color="white" />
          </AnimatedHStack>
        }
      >
        <AnimatedHStack
          w="full"
          h="full"
          gap={3}
          py={2}
          px={2}
          backgroundColor="bg"
        >
          <Checkbox
            size="lg"
            borderColor="border"
            iconColor="white"
            isChecked={task.done}
            onChange={() => toggleTask(task)}
          />
          {isEditing ? (
            <form
              onSubmit={event => {
                event.preventDefault();
                handleEditTask();
              }}
            >
              <Input
                ref={inputRef}
                color="text-normal"
                variant="unstyled"
                fontSize="xl"
                defaultValue={task.label}
                onBlur={handleEditTask}
                autoFocus
              />
            </form>
          ) : (
            <AnimatedTaskLabel
              label={task.label}
              done={task.done}
              onClick={() => setIsEditing(!isEditing)}
            />
          )}
        </AnimatedHStack>
      </SwipeableBox>
    </AnimatedBox>
  );
};

export default TaskItem;
