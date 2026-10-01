import { Chart } from "react-google-charts";
import BloodGroupData from "../../context/BloodGroupData";

import "./BloodGroupCharts.css";

function BloodGroupChart() {
  const groupColors = [
    "#C62828",
    "#E53935",
    "#8E24AA",
    "#5E35B1",
    "#3949AB",
    "#1E88E5",
    "#00897B",
    "#43A047",
  ];

  return (
    <div className="blood-group-chart">
      {/* Left Side - Blood Groups */}
      <div className="blood-groups">
        {BloodGroupData.slice(1).map((item, index) => (
          <div className="blood-group-item" key={index}>
            {/* Color Icon */}
            <span
              className="blood-group-dot"
              style={{
                backgroundColor: groupColors[index],
              }}
            ></span>

            {/* Blood Group */}
            <span className="blood-group-name">{item[0]}</span>
          </div>
        ))}
      </div>

      {/* Right Side - Donut Chart */}
      <div className="blood-group-donut">
        <Chart
          chartType="PieChart"
          width="230px"
          height="230px"
          data={BloodGroupData}
          options={{
            pieHole: 0.6,

            legend: {
              position: "none",
            },

            backgroundColor: "transparent",

            chartArea: {
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
            },

            pieSliceText: "none",

            pieStartAngle: 0,
          }}
        />
      </div>
    </div>
  );
}

export default BloodGroupChart;
