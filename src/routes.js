import { Navigate, useRoutes } from "react-router-dom";
// layouts
import GuestLayouts from "./layouts/GuestLayouts";
import AuthenticatedLayouts from "./layouts/AuthenticatedLayouts";
//
import Panic from "./pages/Panic";
import PanicHistory from "./pages/PanicHistory";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

const Router = () => {
  return useRoutes([
    {
      path: "/home",
      element: <AuthenticatedLayouts />,
      children: [
        { path: "", element: <Home /> },
        { path: "/home/panic", element: <Panic /> },
        { path: "/home/history", element: <PanicHistory /> },
      ],
    },
    {
      path: "/",
      element: <GuestLayouts />,
      children: [
        { path: "/", element: <Navigate to="/home" /> },
        { path: "login", element: <Login /> },
        { path: "404", element: <PageNotFound /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
  ]);
};

export default Router;
