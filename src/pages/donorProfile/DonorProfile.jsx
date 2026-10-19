import Sidebar from "../../components/sidebar/Sidebar";
import profile from "../../assets/profile.png";
import wadget from "../../assets/wadget.png";
import search from "../../assets/searchicon.png";
import "./DonorProfile.css";
// import UserDropDown from "../../components/usercards/UserDropDown";

import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function DonorProfile() {
  const [selected, setSelected] = useState("Monthly");
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.data;

  const dropdownRef = useRef(null);

  const options = ["Monthly", "Yearly", "Weekly"];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="users-management">
        <Sidebar />

        <section>
          <div className="users-management-content">
            <div className="users-management-content-header">
              <h1 className="users-management-content-title">Users</h1>

              <div className="users-management-content-search">
                <div className="users-management-content-search-input-wrapper">
                  <img
                    src={search}
                    alt="Search"
                    className="header-search-icon"
                  />
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="users-management-content-search-input"
                  />
                </div>

                {/* drop down  */}
                <div
                  className="users-management-content-drop-down"
                  ref={dropdownRef}
                >
                  <button
                    type="button"
                    className="users-management-content-dropdown-select"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                  >
                    <span>{selected}</span>

                    <span
                      className={`dropdown-arrow ${isOpen ? "rotate" : ""}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="custom-dropdown-options">
                      {options.map((option) => (
                        <button
                          type="button"
                          key={option}
                          className={`custom-dropdown-option ${
                            selected === option ? "selected" : ""
                          }`}
                          onClick={() => {
                            setSelected(option);
                            setIsOpen(false);
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <img src={wadget} alt="" className="users-badge-icon" />

                <img
                  src={profile}
                  alt=""
                  onClick={() => navigate("/profile")}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>

          {/* profile content section */}

          <div>
            <div className="profile-content-frame">
              <button
                onClick={() => navigate("/users")}
                className="left-arrow-btn"
              >
                &lt;
              </button>
              <span className="profile-content-title">Donor Details</span>
            </div>

            <h1 className="profile-content-heading">Details</h1>

            <div className="donor-profile-card">
              <div className="donor-profile-card-head">
                <img src={profile} alt="Donor profile" />
                <span>{data?.name}</span>
              </div>
              <div className="donor-profile-button">
                <button className="donor-profile-btn btn1">Edit Donor</button>
                <button className="donor-profile-btn btn2">
                  Blocked Donor
                </button>
              </div>

              <hr />

              <div className="donor-profile-info">
                <div className="donor-id-info">
                  <span>ID</span>
                  <span>{data?.id}</span>
                </div>
                <div className="donor-location-info">
                  <span>Location</span>
                  <span>{data?.Location}</span>
                </div>
                <div className="donor-availability-info">
                  <span>Availability</span>
                  <span>{data?.Availability}</span>
                </div>
                <div className="donor-blood_group-info">
                  <span>Blood Group</span>
                  <span>{data?.blood_Group}</span>
                </div>
                <div className="donor-verification-info">
                  <span>Verification</span>
                  <span>{data?.Verification}</span>
                </div>
                <div className="donor-donations-info">
                  <span>Donations</span>
                  <span>{data?.Donations}</span>
                </div>
                <div className="donor-rating-info">
                  <span>Rating</span>
                  <span>{data?.Rating}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default DonorProfile;
