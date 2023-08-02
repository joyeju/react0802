import React, {useEffect, useState} from 'react'
import './Coins.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination'

const API= `https://api.coinpaprika.com/v1/tickers`

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [isCoinsLoading, setIsCoinsLoading] = useState(true);

  const [selectCoin, setSelectCoin] = useState({});
  // 코인 심볼


  // pagination  하기 위한 작업 
  const [ currentPage, setCurrentPage]= useState(1);//현재 보여질 화면
  const [ postsPerPage, setPostPerPage]= useState(10);//한 화면에 보여질 개수
  const indexOfLastPost = currentPage * postsPerPage; // 
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 

  const currentCoins =  coins.slice(indexOfFirstPost, indexOfLastPost)
  // 1페이지의 20개를 맨처음 보이기 


  const axiosHandle = async ()=>{
      const datas = await axios.get(API);
      // setCoins(datas.data)
      setCoins(datas.data.filter(data=>data.rank<=100))
  }

  useEffect(()=>{
      axiosHandle();
      setIsCoinsLoading(false)
  }, [])

  const selectHandle = (e)=>{
      let value = e.target.value; 
      const findCoin = coins.find(coin=>coin.symbol === value);

      console.log(value, findCoin)
      setSelectCoin(findCoin);
  }

  const navigate= useNavigate();
  const coindetailHandle=(id)=>{
      navigate(`/coins/${id}`);
  }

  const prevPageHandle = ()=>{
    if(currentPage <= 1 )  return false; 
    setCurrentPage(currentPage-1)
  }
  const nextPageHandle = ()=>{
    if(currentPage >= 10 )  return false; 
    // 
    setCurrentPage(currentPage+1)
  }
  return (
    <div className='coins-container'>
      {
        isCoinsLoading ? "Loading..." : <h1> Coins TOP { coins.length }</h1>
      }

      {/* {
        coins[0] && <div>
            <div>
              {
                JSON.stringify(coins[0], null, "   " )
              }
            </div>

        </div>
      } */}

      {
         isCoinsLoading  ||  <select onChange={(e)=>selectHandle(e)}>
               <option>코인을 선택하세요.</option>
          {
              coins.map(coin=>(
                <option>{coin.symbol}</option>
              ))
          }
         </select>
      }

      {
        selectCoin && <div  className={selectCoin ? 'coins-select active' : 'coins-select'}>
            <div>{selectCoin.rank} </div>
            <div>{selectCoin.id} </div>
            <div>{selectCoin.name} </div>
            <div>{selectCoin.symbol} </div>
            <div>{selectCoin.circulating_supply} </div>
            <div>{selectCoin.total_supply} </div>
        </div>
      }

      <div>
        <button onClick={prevPageHandle}>이전 10</button>
        <button onClick={nextPageHandle}>다음 10</button>
      </div>
      <table>
      <tr>
          <td>rank </td>
          <td>id </td>
          <td>name   </td>
          <td>symbol  </td>
          <td>circulating_supply  </td>
          <td>total_supply  </td>
      </tr>
      {
        currentCoins && currentCoins.map(coin=>(
            <tr>
                <td>{coin.rank} </td>
                <td>{coin.id} </td>
                <td>{coin.name} </td>
                <td>{coin.symbol} </td>
                <td>{coin.circulating_supply} </td>
                <td>{coin.total_supply} </td>
                <td> <button onClick={ ()=>coindetailHandle(coin.id)}>자세히보기</button>  </td>
            </tr>
        ))
      }
      </table>

      <Pagination  currentPage={currentPage}
                   setCurrentPage={setCurrentPage}
                   postsPerPage={postsPerPage}
                   setPostPerPage={setPostPerPage}
                   prevPageHandle={prevPageHandle}
                   nextPageHandle={nextPageHandle}
      />
    </div>
  )
}

export default Coins