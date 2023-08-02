// import "./styles.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function Line01() {
  return (
    <LineChart
      width={100}
      height={50}
      data={data}
      margin={{
        top: 1,
        right: 1,
        left: 1,
        bottom: 1
      }}
    >
      {/* <CartesianGrid strokeDasharray="30 3 3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend /> */}
      <Line
        dataKey="pv"
        stroke="#8884d8"
        strokeDasharray="20 20" 
        fill="blue"
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      {/* <Line type="monotone" dataKey="amt" stroke="red" /> */}
    </LineChart>
  );
}
// svg 그림기 : 일러, figma, 아이콘, 
// stroke="#8884d8" 선색지정
// strokeDasharray : 점선  선길이 여백 선길이 여백 ....
// strokeWidth={10}
// fill="blue" : 면색지정