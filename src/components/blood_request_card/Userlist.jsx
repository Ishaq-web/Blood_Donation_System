import "./Userlist.css";
import eyeicon from "../../assets/eyeicon.png";
import deleteicon from "../../assets/deleteicon.png";

function Userlist() {
  const UserOption = [
    {
      Request_ID: 1,
      Patient: "Ahmad Khan",
      Blood: "A+",
      Units: 8,
      Hospital: "City Hospital",
      Urgency: "Critical",
      Status: "Active",
    },
    {
      Request_ID: 1,
      Patient: "Ahmad Khan",
      Blood: "A+",
      Units: 8,
      Hospital: "City Hospital",
      Urgency: "Critical",
      Status: "Active",
    },
    {
      Request_ID: 1,
      Patient: "Ahmad Khan",
      Blood: "A+",
      Units: 8,
      Hospital: "City Hospital",
      Urgency: "Critical",
      Status: "Active",
    },
    {
      Request_ID: 1,
      Patient: "Ahmad Khan",
      Blood: "A+",
      Units: 8,
      Hospital: "City Hospital",
      Urgency: "Critical",
      Status: "Active",
    },
  ];

  return (
    <div className="blood-request-user">
      {/* Table Header */}
      <div className="blood-request-user-head">
        <span className="request-id-head">
          <input type="checkbox" />
          ID
        </span>
        <span className="patient-head">Patient</span>
        <span className="blood-head">Blood</span>
        <span className="units-head">Units</span>
        <span className="hospital-head">Hospital</span>
        <span className="urgency-head">Urgency</span>
        <span className="status-head">Status</span>
        <span className="action-head"></span>
      </div>

      {/* Table Rows */}
      {UserOption.map((option) => (
        <div key={option.Request_ID} className="blood-request-user-list">
          <span className="request-id">
            <input type="checkbox" />
            {option.Request_ID}
          </span>
          <span className="patient-name">{option.Patient}</span>
          <span className="blood-user-type">{option.Blood}</span>
          <span className="units-count">{option.Units}</span>
          <span className="hospital-name">{option.Hospital}</span>
          <span className="urgency-status">{option.Urgency}</span>
          <span className="request-status">{option.Status}</span>
          <span className="action-cell">
            <img src={eyeicon} alt="" />
            <img src={deleteicon} alt="" />
          </span>
        </div>
      ))}
    </div>
  );
}

export default Userlist;
