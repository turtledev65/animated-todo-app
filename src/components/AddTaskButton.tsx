import { IconButton } from "@chakra-ui/react";
import { useContext } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import TaskItemsContext from "../context/TaskItemsContext";
import generateUniqueKey from "../utils/generateUniqueKey";

const AddTaskButton = () => {
  const { dispatch } = useContext(TaskItemsContext);

  return (
    <IconButton
      isRound
      colorScheme="blue"
      aria-label="Add Task"
      size="lg"
      fontSize="3xl"
      icon={<HiOutlinePlus />}
      onClick={() =>
        dispatch({
          type: "ADD",
          task: {
            id: generateUniqueKey(),
            label: " ",
            done: false,
          },
        })
      }
    />
  );
};

export default AddTaskButton;
