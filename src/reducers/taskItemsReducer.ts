import { collection, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase.config";
import Task from "../entities/Task";

interface AddAction {
  type: "ADD";
  task: Task;
}
interface ToggleAction {
  type: "TOGGLE";
  task: Task;
}
interface RemoveAction {
  type: "REMOVE";
  task: Task;
}
interface EditAction {
  type: "EDIT";
  task: Task;
  newText: string;
}

export type TaskItemsAction =
  | AddAction
  | RemoveAction
  | ToggleAction
  | EditAction;

const taskItemsReducer = (
  taskItems: Task[],
  action: TaskItemsAction,
): Task[] => {
  const updateTaskItems = () => {
    switch (action.type) {
      case "ADD":
        return [action.task, ...taskItems];
      case "REMOVE":
        return taskItems.filter(task => task !== action.task);
      case "TOGGLE":
        return taskItems.map(task =>
          task === action.task ? { ...task, done: !task.done } : task,
        );
      case "EDIT":
        return taskItems.map(task =>
          task === action.task
            ? { ...task, label: action.newText.trim() }
            : task,
        );
      default:
        return taskItems;
    }
  };

  const updatedTaskItems = updateTaskItems();
  updateDB(updatedTaskItems);
  return updatedTaskItems;
};

const updateDB = async (tasks: Task[]) => {
  const user = auth.currentUser;
  if (!user) return;
  const userRef = doc(collection(db, "users"), user.uid);
  await updateDoc(userRef, { tasks });
};

export default taskItemsReducer;
