import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./routes/home/Home.tsx";
import { Layout } from "./components/Layout.tsx";
import { Basic } from "./routes/basic/Basic.tsx";
import { Intermediate } from "./routes/intermediate/Intermediate.tsx";
import { Leetcode } from "./routes/leetcode/Leetcode.tsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/basic",
        element: <Basic />,
      },
      {
        path: "/intermediate",
        element: <Intermediate />
      },
      {
        path: "/advanced",
        element: <div>Advanced challenges</div>,
      },
      {
        path: "leetcode",
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
