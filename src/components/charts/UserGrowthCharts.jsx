import { useState } from "react";
import { Chart } from "react-google-charts";
import UserGrowthCharts from "../../context/UserGrowthCharts";
import "./UserGrowthCharts.css";

function UserGrowthChart() {
  const [period, setPeriod] = useState("daily");

  // Select graph data according to selected button
  const chartData = UserGrowthCharts[period];

  return (
    <div className="user-growth-chart">
      {/* Header */}
      <div className="user-growth-header">
        {/* Title */}
        <div className="user-growth-title">
          <span>Users Growth</span>

          <h4>({UserGrowthCharts.totalUsers})</h4>
        </div>

        {/* Buttons */}
        <div className="user-growth-buttons">
          <button
            onClick={() => setPeriod("daily")}
            className={period === "daily" ? "active" : ""}
          >
            Daily
          </button>

          <button
            onClick={() => setPeriod("monthly")}
            className={period === "monthly" ? "active" : ""}
          >
            Monthly
          </button>

          <button
            onClick={() => setPeriod("yearly")}
            className={period === "yearly" ? "active" : ""}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Chart */}
      <Chart
        chartType="AreaChart"
        width="100%"
        height="300px"
        data={chartData}
        options={{
          legend: {
            position: "none",
          },

          areaOpacity: 0.5,

          lineWidth: 0,

          pointSize: 0,

          colors: ["#0A2342"],

          backgroundColor: "transparent",

          hAxis: {
            title: "",
            baselineColor: "transparent",

            gridlines: {
              color: "transparent",
            },

            textStyle: {
              color: "black",
            },
          },

          vAxis: {
            title: "",
            minValue: 0,

            baselineColor: "transparent",

            gridlines: {
              color: "transparent",
            },

            textStyle: {
              color: "black",
            },
          },

          chartArea: {
            left: 50,
            top: 40,
            width: "90%",
            height: "80%",
          },
        }}
      />
    </div>
  );
}

export default UserGrowthChart;
