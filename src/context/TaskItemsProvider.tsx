import { ReactNode, useReducer } from "react";
import taskItemsReducer from "../reducers/taskItemsReducer";
import TaskItemsContext from "./TaskItemsContext";

interface TaskItemsProviderProps {
  children: ReactNode | ReactNode[];
}

const TaskItemsProvider = ({ children }: TaskItemsProviderProps) => {
  // Testing Items
  const [taskItems, dispatch] = useReducer(taskItemsReducer, [
    { label: "Item 1", done: false },
    { label: "Item 2", done: true },
    { label: "Item 3", done: false },
    { label: "Item 4", done: false },
    { label: "Item 5", done: false },
    { label: "Item 6", done: true },
    { label: "Item 7", done: false },
  ]);

  return (
    <TaskItemsContext.Provider value={{ taskItems, dispatch }}>
      {children}
    </TaskItemsContext.Provider>
  );
};

export default TaskItemsProvider;
