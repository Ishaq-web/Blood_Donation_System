import Cards from "../components/card/Card";
import BloodGroupChart from "../components/charts/BloodGroupChart";
import UserGrowthChart from "../components/charts/UserGrowthCharts";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

function DashboardLayout() {
  return (
    <>
      <div className="flex min-h-screen bg-[#F5F5F7] gap-4 p-4">
        {/* Sidebar */}
        <Sidebar />

        {/* Right Side */}
        <div className="flex-1">
          {/* Header */}
          <Header />

          {/* Page Content */}
          <main className="mt-8">
            <Cards />

            <div className="flex mt-20 items-center">
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
