import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { Card, Gift, Home } from "../pages";
import CategoryDetails from "../pages/CategoryDetails/CategoryDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gift",
        element: <Gift />,
      },
      {
        path: "/card",
        element: <Card />,
      },
      {
        path: "category/:id",
        element: <CategoryDetails />,
      },
    ],
  },
]);
