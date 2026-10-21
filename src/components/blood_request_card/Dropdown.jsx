import { useState } from "react";
import "./Dropdown.css";

// 1. Reusable dropdown component
function DropdownItem({ title, options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="custom-dropdown">
      <button
        type="button"
        className="dropdown-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value || title}</span>

        <span className={`dropdown-arrow ${isOpen ? "rotate" : ""}`}></span>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <div
              className="dropdown-option"
              key={option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// 2. Main component: two dropdowns
export default function Dropdown() {
  const [period, setPeriod] = useState("This Month");
  const [status, setStatus] = useState("All Status");

  return (
    <div className="filters-container">
      <DropdownItem
        title="Period"
        options={["This Week", "This Month", "This Year"]}
        value={period}
        onChange={setPeriod}
      />

      <DropdownItem
        title="Status"
        options={["All Status", "Active", "Blocked", "Pending"]}
        value={status}
        onChange={setStatus}
      />
    </div>
  );
}
