import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FormContextProvider from "./context/FormContext";
import { BrowserRouter } from "react-router-dom";
import FilterContextProvider from "./context/FilterContext.jsx";
import FightContextProvider from "./context/FightContext.jsx";
// import TestFightContextProvider, { TestFightContext } from "./context/TestFightContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    {/* <TestFightContextProvider> */}
      <FightContextProvider>
        <FilterContextProvider>
          <FormContextProvider>
            <App />
          </FormContextProvider>
        </FilterContextProvider>
      </FightContextProvider>
    {/* </TestFightContextProvider> */}
  </BrowserRouter>,
  // </React.StrictMode>
);
