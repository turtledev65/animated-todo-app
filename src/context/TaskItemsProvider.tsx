import { ReactNode, useReducer } from "react";
import taskItemsReducer from "../reducers/taskItemsReducer";
import TaskItemsContext from "./TaskItemsContext";

interface TaskItemsProviderProps {
  children: ReactNode | ReactNode[];
}

const TaskItemsProvider = ({ children }: TaskItemsProviderProps) => {
  // Testing Items
  const [taskItems, dispatch] = useReducer(taskItemsReducer, []);

  return (
    <TaskItemsContext.Provider value={{ taskItems, dispatch }}>
      {children}
    </TaskItemsContext.Provider>
  );
};

export default TaskItemsProvider;
