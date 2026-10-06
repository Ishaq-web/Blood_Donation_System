import profile from "../../assets/profile.png";
import wadget from "../../assets/wadget.png";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div>
        <h2 className="header-title">Dashboard</h2>
      </div>

      <div className="header-controls">
        <div class="select-wrapper">
          <select class="custom-select">
            <option selected disabled>
              Select Status
            </option>
            <option value="active">This Day</option>
            <option value="blocked">This Month</option>
            <option value="pending">This Year</option>
          </select>
        </div>

        <div>
          <img src={wadget} alt="" className="header-badge-icon" />
        </div>
        <div className="header-profile">
          <img src={profile} alt="" className="header-profile-icon" />
          <span className="header-profile-name">Muhammad Ali</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
