import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DonorDashboard from "../pages/DonorDashboard";
import OrphanageDashboard from "../pages/OrphanageDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import Register from "../pages/Register";
import VerifyEmail from "../pages/VerifyEmail";
import Needs from "../pages/Needs";
import Orphanages from "../pages/Orphanages";



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donor" element={<DonorDashboard />} />
        <Route path="/orphanage" element={<OrphanageDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-email" element={<VerifyEmail/>}/>
       <Route path="/needs" element={<Needs/>}/>
       <Route path="/orphanages" element={<Orphanages/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;