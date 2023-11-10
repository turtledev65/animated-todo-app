import { useContext } from "react";
import TaskItemsContext from "../context/TaskItemsContext";
import Task from "../entities/Task";

const useTaskItems = () => {
  const { taskItems, dispatch } = useContext(TaskItemsContext);

  const addTask = (task: Task) => {
    dispatch({ type: "ADD", task });
  };

  const removeTask = (task: Task) => {
    dispatch({ type: "REMOVE", task });
  };

  const editTask = (task: Task, newText: string) => {
    dispatch({ type: "EDIT", task, newText });
  };

  const toggleTask = (task: Task) => {
    dispatch({ type: "TOGGLE", task });
  };

  return { taskItems, addTask, removeTask, toggleTask, editTask };
};

export default useTaskItems;
