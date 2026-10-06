import "./BloodBankLeft.css";

const bloodData = [
  { type: "A+", value: 55, color: "#0A2342" },
  { type: "O+", value: 72, color: "#FF4143" },
  { type: "B+", value: 38, color: "#000000" },
];

/* BOTTOM CHART - Horizontal Blood Group */

export default function BloodBankLeft() {
  return (
    <div className="horizontal-chart-section">
      {bloodData.map((item) => (
        <div key={item.type} className="h-bar-row">
          <span className="blood-type">{item.type}</span>
          <div className="h-bar-track">
            <div
              className="h-bar-fill"
              style={{ width: `${item.value}%`, background: item.color }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
