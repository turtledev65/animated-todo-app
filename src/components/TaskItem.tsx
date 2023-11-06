import { Box, Checkbox, HStack, Icon, Input } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useContext, useRef, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import TaskItemsContext from "../context/TaskItemsContext";
import Task from "../entities/Task";
import AnimatedTaskLabel from "./AnimatedTaskLabel";
import SwipeableBox from "./SwipeableBox";

const AnimatedBox = motion(Box);
const AnimatedHStack = motion(HStack);

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const { dispatch } = useContext(TaskItemsContext);
  const [isEditing, setIsEditing] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  // TODO: Add data validation so users can't just add empty items
  const handleEditTask = () => {
    dispatch({
      type: "EDIT",
      task,
      newText: inputRef.current?.value ?? "",
    });
    setIsEditing(!isEditing);
  };

  return (
    <AnimatedBox layout>
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
          {isEditing ? (
            <form
              onSubmit={event => {
                event.preventDefault();
                handleEditTask();
              }}
            >
              <Input
                ref={inputRef}
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
