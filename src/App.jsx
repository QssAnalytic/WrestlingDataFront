import React from "react";
import ViewMatches from "./pages/ViewMatches";
import { Routes, Route } from "react-router-dom";
import ActionPage from "./pages/ActionPage";
import Login from "./pages/Login";
import TestActionPage from "./pages/TestActionPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/:fightId" element={<ActionPage />} />
        <Route path="/" element={<ViewMatches />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<TestActionPage />} />
      </Routes>
    </>
  );
}
