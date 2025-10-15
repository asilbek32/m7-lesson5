import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./private-rout";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Home from "../pages/home";
import AddProduct from "../pages/product/add-product";
import Settings from "../pages/settings";
import MainLayout from "../components/main-layout";
import Products from "../pages/product/all-products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/addProduct",
            element: <AddProduct />,
          },
          {
            path: "/settings",
            element: <Settings />,
          },
          {
            path: "/products",
            element: <Products />,
          },
        ],
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
]);
