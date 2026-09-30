import { NavLink } from "react-router-dom";
import logo from "../../assets/logo1.png";
import dashboardicon from "../../assets/dashboardicon.png";
import usersicon from "../../assets/user.png";

function Sidebar() {
  return (
    <>
      <aside className="w-[227px] bg-[#201F31] text-[#FFFFFF] space-y-8 font-sans-serif rounded-[20px]">
        <div className="flex items-center pl-6 mt-8 gap-1">
          <img
            src={logo}
            alt="logo"
            className="w-[38px] h-[48px] bg-white rounded-[50%]"
          />
          <span className="text-[18px] pt-1.5">Blood Donation</span>
        </div>

        <nav className="flex flex-col space-y-1">
          <NavLink to="/" className="flex items-center gap-2 ml-10">
            <img src={dashboardicon} alt="" className="w-[16px] h-[16px]" />
            <span className="text-[18px]">Dashboard</span>
          </NavLink>

          <NavLink to="" className="flex items-center  gap-2 ml-4 mt-6">
            <img src={usersicon} alt="" className="w-[25px] h-[16px]" />
            <span className="text-[16px]">Users Management</span>
          </NavLink>

          <NavLink to="" className="flex items-center  gap-2 ml-4 mt-2">
            <img src={usersicon} alt="" className="w-[25px] h-[16px]" />
            <span className="text-[16px]">Donors Management</span>
          </NavLink>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
