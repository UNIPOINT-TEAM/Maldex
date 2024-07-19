import { createBrowserRouter } from "react-router-dom";
import { AdminLayout, Layout } from "../layout";
import {
    AdminLogin,
    AdminPanel,
    Applying,
    Articles,
    Auth,
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
    GiftDetails,
    Home,
    NotFound,
    Portfolio,
    PortfolioDetail,
    Sidebar,
    SignIn,
    SignUp,
    Tags,
    Tamplate,
} from "../pages";
import CardSet from "../pages/CardSet/CardSet";
import Company2 from "../pages/Company2/Company2";
import { PadPrinting } from "../pages/Applying";

import GallerySidebar from "../pages/Gallery/GallerySidebar";

// admin panel
import {
    SettingsPanel,
    ConstructorPanel,
    FileAndPrice,
    NewsDetail,
} from "../components";
import DefaultTemplate from "../components/GalleryLayoutTemplate/PdfTemplate/DefaultTemplate";
import Liked from "../components/AdminSidebar/Liked";

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
                path: "/cart",
                element: <Card />,
            },
            {
                path: "category/:id",
                element: <CategoryDetails />,
            },
            {
                path: "gift/:id",
                element: <GiftDetails />,
            },
            {
                path: "/portfolio",
                element: <Portfolio />,
            },
            {
                path: "/portfolio/:id",
                element: <PortfolioDetail />,
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
            {
                path: "/sign-in",
                element: <SignIn />,
            },
            {
                path: "/sign-up",
                element: <SignUp />,
            },
            {
                path: "/adminpanel",
                element: <AdminPanel />,
                children: [
                    { path: "settings", element: <SettingsPanel /> },
                    { path: "constructor", element: <ConstructorPanel /> },
                    { path: "files", element: <FileAndPrice /> },
                    { path: "liked", element: <Liked /> },
                ],
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
            {
                path: "pdf",
                element: <DefaultTemplate />,
            },
        ],
    },
]);
