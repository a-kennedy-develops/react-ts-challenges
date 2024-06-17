import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./routes/home/Home.tsx";
import { Layout } from "./components/Layout.tsx";
import { Basic } from "./routes/basic/Basic.tsx";
import { Intermediate } from "./routes/intermediate/Intermediate.tsx";
import { Leetcode } from "./routes/leetcode/Leetcode.tsx";
import { ROUTES } from "./utils/constants.tsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES[0].path,
        element: <Home />,
      },
      {
        path: ROUTES[1].path,
        element: <Basic />,
      },
      {
        path: ROUTES[2].path,
        element: <Intermediate />
      },
      {
        path: ROUTES[3].path,
        element: <div>Advanced challenges</div>,
      },
      {
        path: ROUTES[4].path,
        element: <Leetcode />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
