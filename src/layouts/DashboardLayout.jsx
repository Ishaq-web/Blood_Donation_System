import Cards from "../components/card/Card";
import BloodGroupChart from "../components/charts/BloodGroupChart";
import UserGrowthChart from "../components/charts/UserGrowthCharts";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

import "./DashboardLayout.css";

function DashboardLayout() {
  return (
    <>
      <div className="dashboard-container">
        {/* Sidebar */}
        <Sidebar />

        {/* Right Side */}
        <div className="dashboard-header-content">
          {/* Header */}
          <Header />

          {/* Page Content */}
          <main className="dashboard-main-content">
            <Cards />

            <div className="dashboard-charts">
              <UserGrowthChart />
              <BloodGroupChart />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
