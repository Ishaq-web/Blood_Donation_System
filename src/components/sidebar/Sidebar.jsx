import { NavLink } from "react-router-dom";
import logo from "../../assets/logo1.png";
import dashboardicon from "../../assets/dashboardicon.png";
import usersicon from "../../assets/user.png";

import "./Sidebar.css";

function Sidebar() {
  return (
    <>
      <aside className="asidebar">
        <div className="sidebar-logo">
          <img src={logo} alt="logo" className="" />
          <span className="sidebar-logo-text">Blood Donation</span>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/" className="dashboard-nav-link">
            <img src={dashboardicon} alt="" className="dashboard-img-logo" />
            <span className="sidebar-nav-text">Dashboard</span>
          </NavLink>

          <NavLink to="/users" className="usermanagement-nav-link">
            <img src={usersicon} alt="" className="usermanagement-img-logo" />
            <span className="usermanagement-nav-text">Users Management</span>
          </NavLink>

          <NavLink to="/donors" className="donors-nav-link">
            <img src={usersicon} alt="" className="donors-img-logo" />
            <span className="donors-nav-text">Donors Management</span>
          </NavLink>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
