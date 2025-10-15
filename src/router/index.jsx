import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./private-rout";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Home from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
