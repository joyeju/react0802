import React from "react";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

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
const colors = ["red", "green", "blue", "purple"];

// example에서 테스트 거져서 복붙
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Pie02() {
  return (
    <PieChart width={400} height={400}>
      {/* 실제 차트의 크기화 상관 없고  padding같은 개념 */}
      <Pie
        dataKey="value1"
        startAngle={0}
        endAngle={360}
        // 애니메이션 되는 방향, Pie의 크기도 지정 

        data={data}
        cx={200}
        cy={200}
        innerRadius={80}
        // 도넛 차트를 별도로 두지 않고 innerRadius 
        outerRadius={180}
        // 차트의 크기 
        fill="#8884d8"
        label={renderCustomizedLabel}
        labelLine={false}
      >
        {
            data.map((entry, index)=>(
                <Cell fill={colors[index]}
                      key={`${colors[index]}`}
                />
            ))
        }
      </Pie>
    </PieChart>
  );
}
