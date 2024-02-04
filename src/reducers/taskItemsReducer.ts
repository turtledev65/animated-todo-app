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

interface SetAllAction {
  type: "SET_ALL";
  tasks: Task[];
}

export type TaskItemsAction =
  | AddAction
  | RemoveAction
  | ToggleAction
  | EditAction
  | SetAllAction;

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
      case "SET_ALL":
        return action.tasks;
      default:
        return taskItems;
    }
  };

  const updatedTaskItems = updateTaskItems();
  saveTasks(updatedTaskItems);
  return updatedTaskItems;
};

const saveTasks = async (tasks: Task[]) => {
  const user = auth.currentUser;

  // save the tasks in local storage
  if (user) {
    const userRef = doc(collection(db, "users"), user.uid);
    await updateDoc(userRef, { tasks });
  }

  // update the tasks in the firestore doc
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export default taskItemsReducer;
