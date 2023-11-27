import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TaskItemsProvider from "../context/TaskItemsProvider";

const Layout = () => {
  return (
    <TaskItemsProvider>
      <Sidebar />
      <Outlet />
    </TaskItemsProvider>
  );
};

export default Layout;
