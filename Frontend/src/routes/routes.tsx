import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import CategoryDetails from "../pages/CategoryDetails/CategoryDetails";
import { Card, Company, Gift, Home, Portfolio } from "../pages";

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
      {
      path: "/portfolio",
      element: <Portfolio />,
    },
      {
        path: "/company",
        element: <Company />,
      },
    ],
  },
]);
