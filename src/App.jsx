import React from "react";
import ViewMatches from "./pages/ViewMatches";
import { Routes, Route} from "react-router-dom";
import ActionPage from "./pages/ActionPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/:fightId" element={<ActionPage />} />
        <Route path="/view-matches" element={<ViewMatches />} />
      </Routes>
    </>
  );
}
