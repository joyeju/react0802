import React from 'react'

import { LineChart, Line } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, 
{name: 'Page B', uv: 200, pv: 2600, amt: 2100}, 
{name: 'Page C', uv: 300, pv: 2200, amt: 2500}, 



];

const renderLineChart = (
  <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);

const Charts = () => {
  return (
    <div>
      {renderLineChart}
    </div>
  )
}

export default Charts