import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DonorDashboard from "../pages/DonorDashboard";
import OrphanageDashboard from "../pages/OrphanageDashboard";
import AdminDashboard from "../pages/AdminDashboard";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donor" element={<DonorDashboard />} />
        <Route path="/orphanage" element={<OrphanageDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;