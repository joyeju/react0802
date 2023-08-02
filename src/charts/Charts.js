//import "./styles.css";
import React from "react";
import { PieChart, Pie } from "recharts";

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

export default function CompPie() {
  return (
    <PieChart width={400} height={400}
      //width , height크기제어 필요없음
      //outerRadius 를 이용하여 크기 제어 
    >
      <Pie
        dataKey="value2"
        startAngle={0}
        endAngle={90}
        data={data}
        cx={200}
        cy={200}
        outerRadius={160}
        innerRadius={80}
        fill="#8884d8"
        label
      />
    </PieChart>
  );
}
