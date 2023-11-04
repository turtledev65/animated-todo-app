import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import TestPage from "./pages/TestPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <TestPage /> }],
  },
]);

export default router;
