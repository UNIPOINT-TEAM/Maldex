import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { Gift, Home } from "../pages";

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
    ],
  },
]);
