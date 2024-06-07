import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./routes/home/Home.tsx";
import Basic from "./routes/basic/Basic.tsx";

const router = createBrowserRouter([
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
    element: <div>Intermediate challenges</div>,
  },
  {
    path: "/advanced",
    element: <div>Advanced challenges</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
