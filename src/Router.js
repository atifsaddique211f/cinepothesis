import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Setup from "./components/Setup/Setup";
import GuessPage from "./components/GuessPage/GuessPage";
import Home from "./components/Home/Home";
import SelectTeam from "./components/SelectTeam/SelectTeam";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/setup" element={<Setup />} />
        <Route path="/guess" element={<GuessPage />} />
        <Route path="/select-team" element={<SelectTeam />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
