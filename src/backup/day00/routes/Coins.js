import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Coins.css'
import Pagination from '../components/Pagination'
import {  useAuth } from '../contexts/auth'

// context 로 빼면 될 것 같아요. 

const Coins = ({
    coins, setCoins, isCoinLoading, selectCoin, setSelectCoin, selectHandle
}) => {
    
    const auth = useAuth(); 
    const [ currentPage, setCurrentPage] = useState(1);
    // 현재 화면에 보여질 페이지
    const [ postsPerPage, setPostPerPage] = useState(9);
    // 한화면에 보여질 개수 
    const indexOfLastPost = currentPage * postsPerPage;
    // 한화면에 보여질 마지막 코인 번호
    const indexOfFirstPost =  indexOfLastPost - postsPerPage;
    // 한화면에 보여질 시작 코인 번호

    const curretCoins = coins.slice(indexOfFirstPost, indexOfLastPost);
    // 한화면에 보여질 코인 목록
    
  return (
    <>
    <div>
        <h2>Coins {coins.length}</h2>
        <h3>{ auth.user}님 안녕하세요.</h3>
        {
            isCoinLoading 
            ? <div>Loading...</div> 
            : <select onChange={event=>selectHandle(event)}> 
                <option>선택하세요.</option>
                {
                    coins.map((coin, index)=>(
                        <option  key={`${coin.symbol}${index}`}>{coin.symbol}</option>
                    ))
                }
            </select>
        }
        {/* option 을 선택하면 자세히 표시 */}
        {
            selectCoin && <div>
                <p>이미지</p>
                <p>id : {selectCoin.id}</p>
                <p>name : {selectCoin.name}</p>
                <p>rank : {selectCoin.rank}</p>
                <p>total_supply :{selectCoin.total_supply}</p>
                <p>max_supply : {selectCoin.max_supply}</p>
            </div>
        }
    </div>
    <div>
        <h2>목록보기</h2>    
        <div className='coins-container'>
            {
                curretCoins.map(coin=>(
                    <div className='coin-box'
                         key={coin.id}
                    >
                        <p>이미지</p>
                        <p>id : {coin.id}</p>
                        <p>name : {coin.name}</p>
                        <p>rank : {coin.rank}</p>
                        <p>total_supply :{coin.total_supply}</p>
                        <p>max_supply : {coin.max_supply}</p>
                        <Link to={`${coin.symbol}`}> 자세히보기 </Link> 
                    </div>
                ))
            }
        </div>
    </div>  

    <Pagination coinTotals={coins.length} 
                postsPerPage={postsPerPage}   
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
    />
    </>
  )
}

export default Coins