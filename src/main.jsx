import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FormContextProvider from "./context/FormContext";
import WrestlerContextProvider from "./context/WrestlerContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormContextProvider>
      <WrestlerContextProvider>
        <App />
      </WrestlerContextProvider>
    </FormContextProvider>
  </React.StrictMode>
);
