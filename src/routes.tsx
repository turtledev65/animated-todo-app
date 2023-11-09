import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";
import TestPage from "./pages/TestPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "test", element: <TestPage /> },
    ],
  },
]);

export default router;
