import { IconButton } from "@chakra-ui/react";
import { HiOutlinePlus } from "react-icons/hi";
import useTaskItems from "../hooks/useTaskItems";
import generateUniqueKey from "../utils/generateUniqueKey";

const AddTaskButton = (props: any) => {
  const { addTask } = useTaskItems();

  return (
    <IconButton
      isRound
      colorScheme="blue"
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
