import { useState, useRef, useEffect } from "react";
import "./UserDropdown.css";

function FilterDropdown({ options, defaultValue }) {
  const [selected, setSelected] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

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
    <div className="dropdown-wrapper" ref={dropdownRef}>
      <button
        type="button"
        className="drop-dwon-select"
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
  );
}

function UserDropDown() {
  return (
    <div className="filter-row">
      <FilterDropdown
        defaultValue="Monthly"
        options={["Monthly", "Yearly", "Daily"]}
      />

      <FilterDropdown
        defaultValue="Status"
        options={["Status", "Active", "Blocked", "Pending"]}
      />

      <FilterDropdown
        defaultValue="Sort"
        options={["Sort", "Ascending", "Descending"]}
      />
    </div>
  );
}

export default UserDropDown;
