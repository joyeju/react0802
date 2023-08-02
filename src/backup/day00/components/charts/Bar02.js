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
      width={800}
      height={400}
      data={data}

      // barCategoryGap={50}
      // 항목간의 여백 : 여백이 커질수록 바의 두께는 얇아짐
      // barGap={50}
      // 같은 항목 내에서 바사이의 여백
      // 터무니 없는 간격은 적용되지 않음 

      barSize={50}
      // barCategoryGap, barGap 연관성이 있어서 별도 사용해야 한다.
      maxBarSize={120}
      // 반응형일때  최대로 커질 수 있는 사이즈
      
      margin={{
        top: 30,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="subject" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value1" fill="#8884d8" 
           label={{ position: "top"}}
           stroke="red"
      />
      <Bar dataKey="value2" fill="#82ca9d" 
           label={{ position: "insidebottom"}}
           stroke="darkgreen"
      />
    </BarChart>
  );
}
