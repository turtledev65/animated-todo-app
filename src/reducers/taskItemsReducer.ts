import Task from "../entities/Task";

interface AddAction {
  type: "ADD";
  newTask: Task;
}
interface ToggleAction {
  type: "TOGGLE";
  task: Task;
}
interface RemoveAction {
  type: "REMOVE";
  task: Task;
}

export type TaskItemsAction = AddAction | RemoveAction | ToggleAction;

const taskItemsReducer = (
  taskItems: Task[],
  action: TaskItemsAction,
): Task[] => {
  if (action.type === "ADD") return [...taskItems, action.newTask];
  if (action.type === "TOGGLE")
    return taskItems.map(task =>
      task === action.task ? { ...task, done: !task.done } : task,
    );
  if (action.type === "REMOVE")
    return taskItems.filter(task => task !== action.task);

  return taskItems;
};

export default taskItemsReducer;
