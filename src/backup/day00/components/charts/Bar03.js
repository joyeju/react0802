// import "./styles.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    subject :"html",
    value1:90,
    value2: 78
  },
  {
    subject :"css",
    value1:100,
    value2:99
  },
  {
    subject :"javascript",
    value1:78,
    value2: 80
  },
  {
    subject :"react",
    value1: 95,
    value2: 88
  }
];

export default function Bar02() {
  return (
    <BarChart
      layout="vertical"
      width={800}
      height={400}
      data={data}
 
      margin={{
        top: 30,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis  type="number" />
      <YAxis  dataKey="subject" type="category" />
      <Tooltip />
      <Legend />
      <Bar dataKey="value1" fill="#8884d8" 
           label={{ position: "right"}}
           stroke="red"
      />
      <Bar dataKey="value2" fill="#82ca9d" 
           label={{ position: "right"}}
           stroke="darkgreen"
      />
    </BarChart>
  );
}
