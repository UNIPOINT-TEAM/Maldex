import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
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
