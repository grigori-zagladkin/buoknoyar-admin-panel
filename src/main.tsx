import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "./store";
import { HelmetProvider } from "react-helmet-async";

const store = setupStore();

const helmetContext = {};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
        <BrowserRouter>
            <ChakraProvider>
                <HelmetProvider context={helmetContext}>
                    <App />
                </HelmetProvider>
            </ChakraProvider>
        </BrowserRouter>
    </Provider>
);
