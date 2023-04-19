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
  { name: "Jan", room: 10, booking: 2 },
  { name: "Feb", room: 20, booking: 9 },
  { name: "Mar", room: 13, booking: 5 },
  { name: "Apr", room: 21, booking: 19 },
  { name: "May", room: 15, booking: 10 },
  { name: "Jun", room: 25, booking: 14 },
];

const ChartComponent = () => (
  <div>
    <h1 className="font-bold text-xl">Room and Booking Chart</h1>
    <BarChart width={950} height={400} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Bar dataKey="room" fill="#8884d8" />
      <Bar dataKey="booking" fill="#82ca9d" />
    </BarChart>
  </div>
);

export default ChartComponent;
