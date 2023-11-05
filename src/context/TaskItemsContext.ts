import { Dispatch, createContext } from "react";
import Task from "../entities/Task";
import { TaskItemsAction } from "../reducers/taskItemsReducer";

interface TaskItemsContextType {
  taskItems: Task[];
  dispatch: Dispatch<TaskItemsAction>;
}

const TaskItemsContext = createContext<TaskItemsContextType>(
  {} as TaskItemsContextType,
);

export default TaskItemsContext;
