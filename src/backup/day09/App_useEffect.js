import React, {useEffect, useState } from 'react'
// openApi
import axios from 'axios'

const App = () => {
    const [ value, setValue ] = useState("");
    const [ tickers, setTickers ] = useState([])
    const API = `https://api.coinpaprika.com/v1/tickers`

    const apiHandle = async ()=>{
        const datas = await axios.get( API );
        // console.log(datas.data);
        // setTickers( datas.data )
    }
    const inputHanle = (e)=>{
        console.log(e.target.value);
    }

    useEffect(()=>{
        // 항상 실행
        // 키보드가 입력될때마다 계속 실행 
        console.log('항상 실행')
    })
    useEffect(()=>{
        // loading 화면 설계 했을 때 
        console.log('맨처음 한번 실행')
    }, [])

    useEffect(()=>{
        apiHandle(); 
        console.log('배열에 지정된 변수값이 바뀌면 실행')
    }, [tickers]); // 배열에 종속적으로 실행 

  return (
    <div>
        <input type="text" onChange={ (e)=>setValue(e.target.value) } 
                value={value}
        />
    </div>
  )
}

export default App