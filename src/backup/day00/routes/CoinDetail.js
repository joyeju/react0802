import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


// 데이터 가져와서 차트 
// 데이터 만들기 
// Next.js : server 컴파일, 속도

const CoinDetail = ({coins}) => {
    const { symbol } = useParams();
    const [coin, setCoin] = useState(null);
    const [currentChart, setCurrentChart] = useState()

    // 차트 데이타 생성 함수
    const dataHandle = ()=>{
          //console.log( coin.quotes.USD.price) 
    }
    useEffect(()=>{
        const find = coins.find(coin=>coin.symbol === symbol)
        setCoin(find);
        console.log( find.quotes.USD.price)  

        const chartData = [
          {
              name: "15m",
              value : find.quotes.USD.percent_change_15m
          },
          {
              name: "30m",
              value : find.quotes.USD.percent_change_30m
          },
          {
              name: "1h",
              value : find.quotes.USD.percent_change_1h
          },
          {
              name: "6h",
              value : find.quotes.USD.percent_change_6h
          }
        ]

        setCurrentChart(chartData)
    },[currentChart])

  return (
    <div>
        <h3>CoinDetail {coin && coin.symbol} </h3>   
        <BarChart
          width={500}
          height={300}
          data={currentChart}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" 
              label={{ position: "top"}}
              stroke="red"
          />
        </BarChart>
        
        <Link to="..">이전으로 가기</Link>
    </div>
  )
}

export default CoinDetail