import "./UserDropdown.css";

function UserDropDown() {
  // const [monthly, setMonthly] = useState("Monthly");
  // const [status, setStatus] = useState("Status");
  // const [sort, setSort] = useState("Sort");

  return (
    <>
      <div className="filter-row">
        <div className="dropdown-wrapper">
          <select name="" id="" className="drop-dwon-select">
            <option value="">Monthly</option>
            <option value="">Yearly</option>
            <option value="">Daily</option>
          </select>
        </div>

        <div className="dropdown-wrapper">
          <select name="" id="" className="drop-dwon-select">
            <option value="">Monthly</option>
            <option value="">Yearly</option>
            <option value="">Daily</option>
          </select>
        </div>

        <div className="dropdown-wrapper">
          <select name="" id="" className="drop-dwon-select">
            <option value="">Monthly</option>
            <option value="">Yearly</option>
            <option value="">Daily</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default UserDropDown;
