import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

import ReactGA from "react-ga4";

ReactGA.initialize("G-57NSN4DLPB");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
