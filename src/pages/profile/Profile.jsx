import Sidebar from "../../components/sidebar/Sidebar";
import profile from "../../assets/profile.png";
import wadget from "../../assets/wadget.png";
import search from "../../assets/searchicon.png";
import "./Profile.css";
// import UserDropDown from "../../components/usercards/UserDropDown";

import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Profile() {
  const [selected, setSelected] = useState("Monthly");
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user;

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

            <div className="profile-content-card">
              {user ? (
                <>
                  <div>
                    <div className="profile-card-frame">
                      <img src={profile} alt="" />
                      <div className="profile-card-frame-data">
                        <span>{user.name}</span>
                        <span>+92 344-5093789</span>
                      </div>
                    </div>
                    <div className="profile-card-user-status">
                      <button className="profile-card-btn btn1-color">
                        Blocked
                      </button>
                      <button className="profile-card-btn btn2-color">
                        Delete User
                      </button>
                    </div>
                    <hr className="line-tag" />

                    <div className="profile-card-data">
                      <div className="profile-data-item">
                        <span className="profile-data-label">ID:</span>
                        <span className="profile-data-value">{user.id}</span>
                      </div>

                      <div className="profile-data-item">
                        <span className="profile-data-label">Location:</span>
                        <span className="profile-data-value">
                          {user.location}
                        </span>
                      </div>

                      <div className="profile-data-item">
                        <span className="profile-data-label">Joined Date:</span>
                        <span className="profile-data-value">
                          {user.joined}
                        </span>
                      </div>

                      <div className="profile-data-item">
                        <span className="profile-data-label">Blood Group:</span>
                        <span className="profile-data-value">
                          {user.blood_group}
                        </span>
                      </div>

                      <div className="profile-data-item">
                        <span className="profile-data-label">Verified:</span>
                        <span className="profile-data-value">
                          {user.verified}
                        </span>
                      </div>

                      <div className="profile-data-item">
                        <span className="profile-data-label">Status:</span>
                        <span className="profile-data-value">
                          {user.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <p>No user selected. Please select a user from the list.</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Profile;
