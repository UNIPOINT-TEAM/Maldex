import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
<<<<<<< HEAD
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
=======
import { Card, Company, Delivery, Gift, Home, NotFound, Portfolio, Tags } from "../pages";
>>>>>>> b72aced1b1de90f432cd87926d1b10d68b2f90bf

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
<<<<<<< HEAD

=======
>>>>>>> b72aced1b1de90f432cd87926d1b10d68b2f90bf
      {
        path: "/gift",
        element: <Gift />,
      },
      {
        path: "/card",
        element: <Card />,
      },
      {
<<<<<<< HEAD
        path: "category/:id",
        element: <CategoryDetails />,
      },
      {
=======
>>>>>>> b72aced1b1de90f432cd87926d1b10d68b2f90bf
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/company",
<<<<<<< HEAD
        element: <Company2 />,
=======
        element: <Company />,
>>>>>>> b72aced1b1de90f432cd87926d1b10d68b2f90bf
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
<<<<<<< HEAD
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
=======
>>>>>>> b72aced1b1de90f432cd87926d1b10d68b2f90bf
    ],
  },
]);
