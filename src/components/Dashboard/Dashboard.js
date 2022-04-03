import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="chart-container">
      <div>
        <h2>Month wise sell</h2>
        <LineChart
          width={400}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Line type="monotone" dataKey="sell" stroke="#ffffff"></Line>
          <XAxis dataKey="month"></XAxis>
          <YAxis />
          <CartesianGrid />
        </LineChart>
      </div>
      <div>
        <h2>
          Invesment <b>vs</b> Revenue
        </h2>
        <AreaChart
          width={400}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid />
          <Tooltip />
          <XAxis dataKey="month"></XAxis>
          <YAxis />
          <Area
            type="monotone"
            dataKey="investment"
            stroke="#8884d8"
            fill="#8884d8"
          ></Area>
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#82ca9d"
            fill="#82ca9d"
          ></Area>
        </AreaChart>
      </div>
      <div>
        <h2>
          Invesment <b>vs</b> Revenue
        </h2>
        <BarChart
          width={400}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="revenue" fill="#8884d8" />
          <Bar dataKey="investment" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
