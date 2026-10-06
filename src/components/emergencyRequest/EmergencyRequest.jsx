import EmergencyRequests from "../../context/EmergencyRequest";
import "./EmergencyRequest.css";

function EmergencyRequest() {
  return (
    <div className="emergency-request">
      {/* Title */}
      <h2 className="emergency-request-title">Emergency Requests</h2>

      {/* Table Container */}
      <div className="emergency-table-container">
        <table className="emergency-table">
          {/* Header */}
          <thead className="emergency-table-head">
            <tr className="emergency-header-row">
              {/* Patient Section */}
              <th className="patient-header">Patient</th>

              {/* Other Table Section */}
              <th className="other-header blood-header">Blood</th>

              <th className="other-header hospital-header">Hospital</th>

              <th className="other-header distance-header">Distance</th>

              <th className="other-header urgency-header">Urgency</th>

              <th className="other-header status-header">Status</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody className="emergency-table-body">
            {EmergencyRequests.map((request) => (
              <tr key={request.id} className="emergency-data-row">
                {/* Patient Section */}
                <td className="patient-data">{request.patient}</td>

                {/* Other Table Section */}
                <td className="other-data blood-data">{request.blood}</td>

                <td className="other-data hospital-data">{request.hospital}</td>

                <td className="other-data distance-data">{request.distance}</td>

                <td className="other-data urgency-data">
                  <span
                    className={`urgency-badge urgency-${request.urgency.toLowerCase()}`}
                  >
                    {request.urgency}
                  </span>
                </td>

                <td className="other-data status-data">
                  <span
                    className={`status-badge status-${request.status.toLowerCase()}`}
                  >
                    {request.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="emergency-request-buttons">
        <button className="view-request-button">View Request</button>
        <button className="help-now-button">Help Now</button>
      </div>
    </div>
  );
}

export default EmergencyRequest;
