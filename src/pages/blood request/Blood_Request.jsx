import Sidebar from "../../components/sidebar/Sidebar";
import "./Blood_Request.css";
import searchicon from "../../assets/searchicon.png";
import wadge from "../../assets/wadget.png";
import profile from "../../assets/profile.png";
import { useState, useRef, useEffect } from "react";
import Cards from "../../components/blood_request_card/Card";
import Dropdown from "../../components/blood_request_card/Dropdown";
import Userlist from "../../components/blood_request_card/Userlist";

function Blood_Request() {
  const [period, setPeriod] = useState("This Month");
  const [isOpen, setIsOpen] = useState(false);

  const periodOptions = ["This Week", "This Month", "This Year"];

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div>
        <Sidebar />

        <section className="blood-request-section">
          <div className="blood-request-content">
            <div className="blood-request-header">
              <h1>Blood Request</h1>

              <div className="blood-request-header-right">
                {/* Blood Request Search */}
                <div className="blood-request-header-search">
                  <img src={searchicon} alt="" className="search-icon" />

                  <input
                    type="text"
                    placeholder="search for users & events ..."
                  />
                </div>

                {/* Custom Dropdown */}
                <div className="blood-request-head-dropdown" ref={dropdownRef}>
                  <button
                    type="button"
                    className="blood-request-head-dropdown-select"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-expanded={isOpen}
                    aria-haspopup="listbox"
                  >
                    <span>{period}</span>

                    <span
                      className={`blood-request-period-arrow ${
                        isOpen ? "open" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      className="blood-request-period-popup"
                      role="listbox"
                      aria-label="Select period"
                    >
                      {periodOptions.map((option) => (
                        <button
                          type="button"
                          key={option}
                          role="option"
                          aria-selected={period === option}
                          className={`blood-request-head-dropdown-option ${
                            period === option ? "selected" : ""
                          }`}
                          onClick={() => {
                            setPeriod(option);
                            setIsOpen(false);
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Profile frame */}
                <div className="blood-request-header-profile">
                  <img
                    src={wadge}
                    alt=""
                    className="blood-request-wadget-icon"
                  />

                  <img
                    src={profile}
                    alt=""
                    className="blood-request-profile-icon"
                  />
                </div>
              </div>
            </div>

            <div className="blood-request-content-cards">
              <Cards />
            </div>

            <div className="blood-request-content-dropdown">
              <h1 className="blood-request-content-dropdown-title">
                All Chats
              </h1>
              <Dropdown />
            </div>

            <div>
              <Userlist />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Blood_Request;
