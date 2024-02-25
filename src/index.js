import React from "react";

import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ReactGA from "react-ga4";

import Layout from "./components/UI/Layout";

import { QueryClient, QueryClientProvider } from "react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactGA.initialize("G-57NSN4DLPB");

createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </ChakraProvider>
);
