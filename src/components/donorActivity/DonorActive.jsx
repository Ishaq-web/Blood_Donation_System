// import React from "react";
import "./DonorActive.css";

const verticalData = [
  { day: "01", value: 25 },
  { day: "10", value: 45 },
  { day: "15", value: 65 },
  { day: "20", value: 80 },
  { day: "31", value: 95 },
];

export default function DonorActive() {
  return (
    <div className="donor-activity-card">
      {/* TOP CHART - Vertical */}
      <div className="vertical-chart-section">
        <h3 className="chart-title">Donor Activity</h3>
        <div className="vertical-bars">
          {verticalData.map((item) => (
            <div key={item.day} className="v-bar-wrapper">
              <div className="v-bar-track">
                <div
                  className="v-bar-fill"
                  style={{ height: `${item.value}%` }}
                ></div>
              </div>
              <span className="v-bar-label">{item.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
