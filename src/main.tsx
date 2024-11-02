import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import "@/index.css";
import { ChainlitAPI, ChainlitContext } from "@chainlit/react-client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

// Pages
import App from "@/pages/App.tsx";
import FrontRoot from "@/pages/FrontRoot";
import Login from "@/pages/Login.tsx";
import Register from "@/pages/Register.tsx";

const CHAINLIT_SERVER = "http://localhost:80/chainlit";
const apiClient = new ChainlitAPI(CHAINLIT_SERVER, "webapp");

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontRoot/>,
    children: [
      {
        path: "*",
        element: <Navigate to="/" replace={true} />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "chat",
        element: <App />
      },
      {
        path: "register",
        element: <Register />
      },
      // {
      //   path: "profile",
      //   element: <Profile />
      // },
      // {
      //   path: "settings",
      //   element: <Settings />
      // }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChainlitContext.Provider value={apiClient}>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </ChainlitContext.Provider>
  </React.StrictMode>
);
