import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import {
  BuildSet,
  Card,
  CategoryDetails,
  Company,
  Delivery,
  Gift,
  Home,
  NotFound,
  Portfolio,
  Tags,
} from "../pages";

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
      {
        path: "/tags",
        element: <Tags />,
      },
      {
        path: "/error",
        element: <NotFound />,
      },
      {
        path: "/delivery",
        element: <Delivery />,
      },
      {
        path: "build-set",
        element: <BuildSet />,
      },
    ],
  },
]);
