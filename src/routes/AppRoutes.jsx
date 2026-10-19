import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import UserManagement from "../pages/users/Users";
import DonorsManagement from "../pages/donors/Donors";
import Profile from "../pages/profile/Profile";
import DonorProfile from "../pages/donorProfile/DonorProfile";
import Blood_Request from "../pages/blood request/Blood_Request";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />} />

          <Route path="/Users" element={<UserManagement />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/donors" element={<DonorsManagement />} />
          <Route path="/donorProfile" element={<DonorProfile />} />
          <Route path="/blood_request" element={<Blood_Request />} />
          <Route path="/logout" element={<h1>logout</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
