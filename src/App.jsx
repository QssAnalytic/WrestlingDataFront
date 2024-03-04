import React from "react";
import ViewMatches from "./pages/ViewMatches";
import { Routes, Route } from "react-router-dom";
import ActionPage from "./pages/ActionPage";
import Login from "./pages/Login";
import TestActionPage from "./pages/TestActionPage/index";

export default function App() {
  return (
    <>
    {/* Seperate routes from App component asap */}
      <Routes>
        {/* <Route path="/:fightId" element={<ActionPage />} /> */}
        <Route path="/test/:fightId" element={<TestActionPage />} />
        <Route path="/" element={<ViewMatches />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/test" element={<TestActionPage />} /> */}
      </Routes>
    </>
  );
}
