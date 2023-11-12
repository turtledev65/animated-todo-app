import { createHashRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);

export default router;
