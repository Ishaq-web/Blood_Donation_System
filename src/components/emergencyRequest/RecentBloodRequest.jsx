import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import "./RecentBloodRequest.css";

const dataYearly = [
  { name: "Jan", value: 280 },
  { name: "", value: 165 },
  { name: "Feb", value: 185 },
  { name: "", value: 160 },
  { name: "Mar", value: 228 },
  { name: "", value: 186 },
  { name: "Apr", value: 280 },
  { name: "Jul", value: 232 },
];

const dataMonthly = [
  { name: "Week 1", value: 120 },
  { name: "Week 2", value: 200 },
  { name: "Week 3", value: 150 },
  { name: "Week 4", value: 280 },
];

export default function RecentBloodRequests() {
  const [active, setActive] = useState("Yearly");
  const data = active === "Yearly" ? dataYearly : dataMonthly;

  return (
    <div className="recent-blood-card">
      <div className="recent-blood-header">
        <h2 className="recent-blood-title">Recent Blood Requests</h2>
        <div className="recent-blood-tabs">
          <button
            className={active === "Daily" ? "tab active" : "tab"}
            onClick={() => setActive("Daily")}
          >
            Daily
          </button>
          <button
            className={active === "Monthly" ? "tab active" : "tab"}
            onClick={() => setActive("Monthly")}
          >
            Monthly
          </button>
          <button
            className={active === "Yearly" ? "tab active" : "tab"}
            onClick={() => setActive("Yearly")}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart
            data={data}
            margin={{ left: 10, right: 20, top: 10, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2196F3" stopOpacity={0.9} />
                <stop offset="70%" stopColor="#2196F3" stopOpacity={0.15} />
                <stop offset="100%" stopColor="#2196F3" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              axisLine={true}
              tickLine={false}
              tick={{ fontSize: 18, fill: "#000000" }}
              dy={10}
            />
            <YAxis
              domain={[100, 300]}
              ticks={[100, 150, 200, 250]}
              axisLine={true}
              tickLine={false}
              tick={{ fontSize: 18, fill: "#000000" }}
              dx={-10}
            />
            <Tooltip />
            <Area
              type="linear"
              dataKey="value"
              stroke="#42A5F5"
              strokeWidth={2}
              strokeDasharray="5 5"
              fill="url(#colorBlue)"
              dot={false}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
