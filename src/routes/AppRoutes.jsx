import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />} />

          <Route path="/Users" element={<h1>Users</h1>} />
          <Route path="/donors" element={<h1>donors</h1>} />
          <Route path="/hospitals" element={<h1>hospitals</h1>} />
          <Route path="/setting" element={<h1>setting</h1>} />
          <Route path="/logout" element={<h1>logout</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
