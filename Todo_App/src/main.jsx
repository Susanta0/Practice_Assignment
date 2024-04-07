import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
// import { Provider } from "react-redux";
// import { store } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvaider } from "./Context/AuthContextProvaider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider>
      <AuthContextProvaider>

        <App />
      </AuthContextProvaider>
     
    </ChakraProvider>
  </BrowserRouter>
);
