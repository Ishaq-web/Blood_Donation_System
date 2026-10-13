import { useState, useRef, useEffect } from "react";

import profile from "../../assets/profile.png";
import wadget from "../../assets/wadget.png";

import "./Header.css";

function Header() {
  const [selected, setSelected] = useState("Select status");
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const options = ["This Day", "This Month", "This Year"];

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
    <header className="header">
      <div>
        <h2 className="header-title">Dashboard</h2>
      </div>

      <div className="header-controls">
        {/* Custom Dropdown */}
        <div className="select-wrapper" ref={dropdownRef}>
          <button
            type="button"
            className="custom-select"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
          >
            <span>{selected}</span>

            <span className={`dropdown-arrow ${isOpen ? "rotate" : ""}`} />
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

        <div>
          <img src={wadget} alt="" className="header-badge-icon" />
        </div>

        <div className="header-profile">
          <img src={profile} alt="Profile" className="header-profile-icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
