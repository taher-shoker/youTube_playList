import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "containers/pages/home/landingPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default AppRoutes;
