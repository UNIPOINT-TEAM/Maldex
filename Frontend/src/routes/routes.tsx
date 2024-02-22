import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import {
  AdminPanel,
  Applying,
  Articles,
  BuildSet,
  Card,
  Catalog,
  CategoryDetails,
  Company,
  Delivery,
  Gift,
  Home,
  NotFound,
  Portfolio,
  Sidebar,
  Tags,
} from "../pages";
import CardSet from "../pages/CardSet/CardSet";
import Company2 from "../pages/Company2/Company2";
import { PadPrinting } from "../pages/Applying";

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
        element: <Company2 />,
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
      {
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/cardset",
        element: <CardSet />,
      },
      {
        path: "/admin",
        element: <AdminPanel />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
      {
        path: "/applying-type",
        element: <Sidebar />,
        children: [
          { path: "apply", element: <Applying /> },
          { path: "pad-printing", element: <PadPrinting /> },
        ],
      },
    ],
  },
]);
