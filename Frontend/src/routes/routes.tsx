import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import {
  AdminLogin,
  AdminPanel,
  Applying,
  Articles,
  BuildSet,
  Card,
  Catalog,
  CategoryDetails,
  // Company,
  Delivery,
  Gallery,
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
import Layout2 from "../layout/Layout2";

// admin panel
import { SettingsPanel, ConstructorPanel, FileAndPrice } from "../components";

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
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/delivery",
        element: <Delivery />,
      },
      {
        path: "/build-set",
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
        element: <AdminLogin />,
      },

      //admin panel route is changed by Yusuf 
      {
        path: "/adminpanel",
        element: <AdminPanel />,
        children: [
          { path: "settings", element: <SettingsPanel /> },
          { path: "constructor", element: <ConstructorPanel /> },
          { path: "files", element: <FileAndPrice /> },
        ],
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
  {
    path: "/admin",
    element: <Layout2 />,
    children: [
      {
        path: "gallery",
        element: <Gallery />,
      },
    ],
  },
]);
