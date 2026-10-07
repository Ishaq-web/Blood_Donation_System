import Sidebar from "../../components/sidebar/Sidebar";
import "./Donors.css";

function DonorsManagement() {
  return (
    <div className="donors-management">
      <div>
        <Sidebar />
      </div>
      <div className="donors-management-content">
        <h1>Donors Management</h1>
      </div>
    </div>
  );
}

export default DonorsManagement;
