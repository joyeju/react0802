
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  Label
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
    <BarChart width={730} height={350} data={data}
          barCategoryGap={50}
          // barGap={30}
          // maxBarSize={20}
          //barSize={50}
          margin={{
            top:30,
            buttom:50
          }}
    >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" >
    <Label value="가로제목" offset={-80} position="insideBottom" />
    </XAxis>
    <YAxis label={{ value: '세로제목', angle: -90, position: 'insideLeft', textAnchor: 'middle' }}/>
    <Tooltip />
    <Legend />
    <Bar dataKey="value1" fill="#8884d8" >
    <LabelList dataKey="value1" position="Top" />
    </Bar>
    <Bar dataKey="value2" fill="#82ca9d" >
    <LabelList dataKey="value2" position="Top"  />
    </Bar>
  </BarChart>
  );
}

// svg : 선을 그리기 
//stroke : 선색 
//fill : 면색 
//stroke-width 
// stroke-Dash-array : 점색
