import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FormContextProvider from "./context/FormContext";
import { BrowserRouter } from "react-router-dom";
import FilterContextProvider from "./context/FilterContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <BrowserRouter>
      <FilterContextProvider>
        <FormContextProvider>
          <App />
        </FormContextProvider>
      </FilterContextProvider>
    </BrowserRouter>
  // </React.StrictMode>
);
