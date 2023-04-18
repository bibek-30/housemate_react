import React from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const data = [
  { name: "Jan", sales: 1000, profit: 240 },
  { name: "Feb", sales: 2000, profit: 139 },
  { name: "Mar", sales: 3000, profit: 980 },
  { name: "Apr", sales: 2500, profit: 390 },
  { name: "May", sales: 5000, profit: 480 },
  { name: "Jun", sales: 3800, profit: 780 },
];

const ChartComponent = () => (
  <div>
    <h1>Sales and Profit Chart</h1>
    <BarChart width={800} height={400} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Bar dataKey="sales" fill="#8884d8" />
      <Bar dataKey="profit" fill="#82ca9d" />
    </BarChart>
  </div>
);

export default ChartComponent;
