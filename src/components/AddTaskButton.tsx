import { IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { HiOutlinePlus } from "react-icons/hi";
import useTaskItems from "../hooks/useTaskItems";
import generateUniqueKey from "../utils/generateUniqueKey";

const AnimatedIconButton = motion(IconButton);

const AddTaskButton = (props: any) => {
  const { addTask } = useTaskItems();

  return (
    <AnimatedIconButton
      isRound
      backgroundColor="blue"
      color="white"
      _hover={{ backgroundColor: "blue" }}
      whileTap={{ scale: 0.9 }}
      aria-label="Add Task"
      size="lg"
      fontSize="3xl"
      icon={<HiOutlinePlus />}
      onClick={() =>
        addTask({
          id: generateUniqueKey(),
          label: "",
          done: false,
        })
      }
      {...props}
    />
  );
};

export default AddTaskButton;
