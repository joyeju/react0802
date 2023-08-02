
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
    name: "html",
    value1:99,
    value2:99

  },
  {
    name: "css",
    value1:77,
    value2:88

  },
  {
    name: "js",
    value1:66,
    value2:33

  },


  
];

export default function CompeBar() {
  return (
    <BarChart width={730} height={350} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="value1" fill="#8884d8" 
      stroke = "red"
      strokeDasharray = "3 3"
      />
    <Bar dataKey="value2" fill="#82ca9d" />
  </BarChart>
  );
}

// svg : 선을 그리기 
//stroke : 선색 
//fill : 면색 
//stroke-width 
// stroke-Dash-array : 점색
