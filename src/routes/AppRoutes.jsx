// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import TermsPage from "../pages/terms/TermsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="*" element={<>Not FOund</>} />
    </Routes>
  );
}

export default AppRoutes;
