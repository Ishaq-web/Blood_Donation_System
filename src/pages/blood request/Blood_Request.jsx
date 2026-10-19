import Sidebar from "../../components/sidebar/Sidebar";
import "./Blood_Request.css";
import searchicon from "../../assets/searchicon.png";
import wadge from "../../assets/wadget.png";
import profile from "../../assets/profile.png";
import { useState } from "react";

function Blood_Request() {
  const [period, setPeriod] = useState("This Month");

  const periodOptions = ["This Week", "This Month", "This Year"];
  return (
    <>
      <div>
        <Sidebar />

        <section className="blood-request-section">
          <div className="blood-request-content">
            <div className="blood-request-header">
              <h1>Blood Request</h1>

              {/* Blood Request Seach  */}

              <div className="blood-request-header-search">
                <img src={searchicon} alt="" className="search-icon" />
                <input
                  type="text"
                  placeholder="search for users & events ..."
                />
              </div>

              {/* Drop Down  */}
              <div className="blood-request-head-dropdown">
                <select
                  name=""
                  id=""
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                  className="blood-request-head-dropdown-select"
                >
                  <option value="">Select an option</option>
                  {periodOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Profile frame  */}

              <div className="blood-request-header-profile">
                <img src={wadge} alt="" className="blood-request-wadget-icon" />
                <img
                  src={profile}
                  alt=""
                  className="blood-request-profile-icon"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Blood_Request;
