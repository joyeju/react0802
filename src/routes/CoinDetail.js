import React from 'react'
import './CoinDetail.css'
import { useParams } from 'react-router-dom'

const CoinDetail = () => {
  const { id } = useParams();

  return (
    <div>CoinDetail  {id}</div>
    // chart 
  )
}

export default CoinDetail