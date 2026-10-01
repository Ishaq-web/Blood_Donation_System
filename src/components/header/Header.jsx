import profile from "../../assets/profile.png";
import wadget from "../../assets/wadget.png";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div>
        <h2 className="header-title">Blood Donation</h2>
      </div>

      <div className="header-controls">
        <div className="header-dropdown">
          <select name="" id="" className="form-select">
            <option value="month" className="option">
              This month
            </option>
            <option value="year" className="option">
              This year
            </option>
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
