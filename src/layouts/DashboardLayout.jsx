import BloodBankLeft from "../components/bloodBank/BloodBankActivity";
import HospitalAndBlood from "../components/bloodBank/HostipatAndBlood";
import Cards from "../components/card/Card";
import BloodGroupChart from "../components/charts/BloodGroupChart";
import UserGrowthChart from "../components/charts/UserGrowthCharts";
import DonorActive from "../components/donorActivity/DonorActive";
import DonorVerification from "../components/donorActivity/DonorVerification";
import EmergencyRequest from "../components/emergencyRequest/EmergencyRequest";
import RecentBloodRequests from "../components/emergencyRequest/RecentBloodRequest";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
// import RecentCharity from "../components/totalCard/RecentCharity";
import CharityDashboardFinal from "../components/totalCard/TotalCard";

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

            <div className="Emergency-request-section">
              <EmergencyRequest />
              <RecentBloodRequests />
            </div>
            <div className="Donor-Activity-section">
              <DonorActive />
              <DonorVerification />
            </div>

            <div className="blood-bank-section">
              <BloodBankLeft />
              <HospitalAndBlood />
            </div>

            <div className="total-recent-charity">
              <CharityDashboardFinal />
              {/* <RecentCharity /> */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
