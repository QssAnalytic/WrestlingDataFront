import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FormContextProvider from "./context/FormContext";
// import WrestlerContextProvider from "./context/WrestlerContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FormContextProvider>
        {/* <WrestlerContextProvider> */}
          <App />
        {/* </WrestlerContextProvider> */}
      </FormContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
