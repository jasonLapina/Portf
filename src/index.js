import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import ReactGA from "react-ga4";
import Blogs from "./pages/Blogs";
import Layout from "./components/UI/Layout";
import Memes from "./pages/Memes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "peter",
        element: <Memes />,
      },
    ],
  },
]);

ReactGA.initialize("G-57NSN4DLPB");

createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
);
