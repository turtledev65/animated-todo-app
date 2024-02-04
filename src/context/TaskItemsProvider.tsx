import { User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { PropsWithChildren, useEffect, useReducer } from "react";
import { auth, db } from "../../firebase.config";
import Task from "../entities/Task";
import taskItemsReducer from "../reducers/taskItemsReducer";
import TaskItemsContext from "./TaskItemsContext";

const TaskItemsProvider = ({ children }: PropsWithChildren) => {
  const user = auth.currentUser;
  const [taskItems, dispatch] = useReducer(taskItemsReducer, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user)
        getTasksFromDB(user).then(res => {
          dispatch({ type: "SET_ALL", tasks: res });
        });
      else {
        const tasks = getTasksFromLocalStorage();
        if (!tasks) return;
        else dispatch({ type: "SET_ALL", tasks: tasks });
      }
    });

    return () => unsubscribe();
  }, [user]);

  return (
    <TaskItemsContext.Provider value={{ taskItems, dispatch }}>
      {children}
    </TaskItemsContext.Provider>
  );
};

const getTasksFromDB = async (user: User) => {
  const userDoc = await getDoc(doc(db, "users", user.uid));
  if (userDoc.exists()) return userDoc.data().tasks;
  else return [];
};

const getTasksFromLocalStorage = () => {
  const entryString = localStorage.getItem("tasks");
  if (!entryString) return null;
  else {
    try {
      const entry = JSON.parse(entryString) as Task[];
      return entry;
    } catch {
      return null;
    }
  }
};

export default TaskItemsProvider;
