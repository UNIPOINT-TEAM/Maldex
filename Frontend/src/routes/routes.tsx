import { createBrowserRouter } from "react-router-dom";
import { AdminLayout, Layout } from "../layout";
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
  GalleryEditing,
  GalleryLayout,
  Gift,
  Home,
  NotFound,
  Portfolio,
  Sidebar,
  Tags,
  Tamplate,
} from "../pages";
import CardSet from "../pages/CardSet/CardSet";
import Company2 from "../pages/Company2/Company2";
import { PadPrinting } from "../pages/Applying";

import GallerySidebar from "../pages/Gallery/GallerySidebar";

// admin panel
import { SettingsPanel, ConstructorPanel, FileAndPrice, NewsDetail } from "../components";

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
        path: "/articles",
        element: <Articles />,
      },
      {
        path: "/articles/:id",
        element: <NewsDetail />,
      },
      {
        path: "/applying-type",
        element: <Sidebar />,
        children: [
          { path: "apply", element: <Applying /> },
          { path: "pad-printing", element: <PadPrinting /> },
        ],
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
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "gallery",
        element: <GallerySidebar />,
        children: [
          {
            path: "general-information",
            element: <Gallery />,
          },
          {
            path: "layout",
            element: <GalleryLayout />,
          },
          {
            path: "editing",
            element: <GalleryEditing />,
          },
          {
            path: "tamplate",
            element: <Tamplate />,
          },
        ],
      },


    ],
  },
]);
