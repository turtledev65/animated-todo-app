import { createHashRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
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
  { path: "login", element: <LoginPage /> },
]);

export default router;
