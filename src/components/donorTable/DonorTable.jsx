import "./DonorTable.css";
import DonorsTable from "../../context/DonorsTable";

import eyeicon from "../../assets/eyeicon.png";
import deleteicon from "../../assets/deleteicon.png";
import { useNavigate } from "react-router-dom";

function DonorTable() {
  const navigate = useNavigate();
  return (
    <div className="donor-table">
      <div className="donor-header">
        <span className="header-id">
          <input type="checkbox" />
          ID
        </span>
        <span className="header-name">Name</span>
        <span className="header-blood">Blood Group</span>
        <span className="header-location">Location</span>
        <span className="header-availability">Availability</span>
        <span className="header-verification">Verification</span>
        <span className="header-donations">Donations</span>
        <span className="header-rating">Rating</span>
        <span className="header-action">Action</span>
      </div>

      {DonorsTable.map((data) => (
        <div className="donor-row" key={data.id}>
          <span className="row-id">
            <input type="checkbox" />
            {data.id}
          </span>
          <span className="row-name">{data.name}</span>
          <span className="row-blood">{data.blood_Group}</span>
          <span className="row-location">{data.Location}</span>
          <span className="row-availability">{data.Availability}</span>
          <span className="row-verification">{data.Verification}</span>
          <span className="row-donations">{data.Donations}</span>
          <span className="row-rating">{data.Rating}</span>
          <span className="row-action">
            <img
              src={eyeicon}
              alt=""
              className="eye-icon"
              onClick={() => navigate("/donorProfile", { state: { data } })}
              style={{ cursor: "pointer" }}
            />
            <img src={deleteicon} alt="" className="delete-icon" />
          </span>
        </div>
      ))}
    </div>
  );
}

export default DonorTable;
