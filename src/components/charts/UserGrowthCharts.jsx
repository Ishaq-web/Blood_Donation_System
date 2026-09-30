import { useState } from "react";
import { Chart } from "react-google-charts";
import UserGrowthCharts from "../../context/UserGrowthCharts";

function UserGrowthChart() {
  const [period, setPeriod] = useState("daily");

  // Select graph data according to selected button
  const chartData = UserGrowthCharts[period];

  return (
    <div className="rounded-[28px] bg-white p-6 w-[720px] h-[400px]">
      {/* Header */}
      <div className="flex justify-between">
        {/* Title */}
        <div className="flex items-center gap-1">
          <span>Users Growth</span>

          <h4 className="text-2xl font-bold">
            ({UserGrowthCharts.totalUsers})
          </h4>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 w-[221px] h-[48px] bg-[#96969694] rounded-[991px] p-1">
          <button
            onClick={() => setPeriod("daily")}
            className={`w-[83px] h-[32px] rounded-[99px] p-2 ${
              period === "daily"
                ? "bg-[#C62828] text-white"
                : "hover:bg-[#C62828] hover:text-white"
            }`}
          >
            Daily
          </button>

          <button
            onClick={() => setPeriod("monthly")}
            className={`w-[83px] h-[32px] rounded-[99px] p-2 ${
              period === "monthly"
                ? "bg-[#C62828] text-white"
                : "hover:bg-[#C62828] hover:text-white"
            }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setPeriod("yearly")}
            className={`w-[83px] h-[32px] rounded-[99px] p-2 ${
              period === "yearly"
                ? "bg-[#C62828] text-white"
                : "hover:bg-[#C62828] hover:text-white"
            }`}
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
