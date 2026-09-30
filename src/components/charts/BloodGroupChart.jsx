import { Chart } from "react-google-charts";
import BloodGroupData from "../../context/BloodGroupData";

function BloodGroupChart() {
  return (
    <div className="flex items-center w-[500px] h-[300px] gap-8 ml-12">
      {/* Blood Groups */}
      <div className="flex flex-col gap-4 min-w-[80px]">
        {BloodGroupData.slice(1).map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-sm font-medium"
          >
            <span
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: [
                  "#C62828",
                  "#E53935",
                  "#8E24AA",
                  "#5E35B1",
                  "#3949AB",
                  "#1E88E5",
                  "#00897B",
                  "#43A047",
                ][index],
              }}
            ></span>

            <span>{item[0]}</span>
          </div>
        ))}
      </div>

      {/* Donut Chart */}
      <div className="w-[280px] h-[280px]">
        <Chart
          chartType="PieChart"
          width="100%"
          height="280px"
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
