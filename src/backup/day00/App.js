import React,{ useState, useEffect } from 'react'
// 포트폴리오 => 설계(제작) => 라우트설정
import ThemeContextProvider from './contexts/ThemeContextProvider'
import PostsContextProvider from './contexts/PostsContextProvider'
import { AuthProvider , useAuth } from './contexts/auth'

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { Header, Footer } from './components'
import { PostLayout, SectionLayout } from './Layouts'
import RequieAuth from './Layouts/RequieAuth'
import {
    About, Contact, Home, NotFound, PostDetail, Posts, NewPost,
    Coins, CoinDetail, Login
} from './routes'
import axios from 'axios'
// npm i axios

import './App.css'
const App = () => {

    const [ coins, setCoins ] = useState([]);
    const [ isCoinLoading, setIsCoinLoading ] = useState(true);
    const [ selectCoin, setSelectCoin ] = useState(null);
    
    const COINS_URL = `https://api.coinpaprika.com/v1/tickers`;
    //const COINS_URL = `http://localhost:3500/datas`;

    const axiosHandle = async ()=>{
        const datas = await axios.get(COINS_URL);
        setCoins(datas.data.filter(item=>item.rank<=100))
        //setCoins(datas.data)
        setIsCoinLoading(false);
    }

    const selectHandle = (event)=>{
        console.log(event.target.value);
        //coin.symbol
        //value  생략하면 text 값을 value 로 사용
        const value = event.target.value;
        const find = coins.find(coin=>coin.symbol === value);
        // find 겹치는 중 첫번째것만 찾기 
        // filter 모두 찾기 
        setSelectCoin(find);
    }

    // makeup  : null 값 걸러서 새로운 데이터 만들고 사용하기 
    
    useEffect(()=>{
        axiosHandle();
    }, [])

  return (
    <ThemeContextProvider>
        <AuthProvider>
        <PostsContextProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route  element={<SectionLayout />}>
                        <Route path="/" element={<Home />} />  
                         
                        <Route path="/coins" element={ 
                            <RequieAuth>
                                <Outlet />
                            </RequieAuth>
                        }>
                            <Route index element={
                                    <Coins 
                                        coins={coins}
                                        setCoins={setCoins}
                                        isCoinLoading={isCoinLoading}
                                        selectCoin={selectCoin}
                                        setSelectCoin={setSelectCoin}
                                        selectHandle={selectHandle}
                                    />} 
                            />  
                            <Route path=":symbol" element={<CoinDetail  coins={coins} />} /> 
                            {/* selectCoin 값을 사용하면 데이타 하나만 전송 */}
                        </Route>

                        {/*
                        <Route path="/products" element={<Products />} />  
                        <Route path="/products/:name" element={<ProductDetail />} />  */}

                        <Route  path="/posts" element={
                            <RequieAuth>
                                <PostLayout />
                            </RequieAuth>
                        }>
                            <Route index element={<Posts />} /> 
                            
                            {/* http://localhost:3000/posts/newpost */}
                            <Route path="newpost" 
                                element={<NewPost />} 
                            /> 

                            <Route path=":id" 
                                element={ <PostDetail />} 
                            />  
                        </Route>
                        
                        <Route path="/login" element={<Login />} />

                        {/* <Route  path="/host" element={<HostLayout />}>
                            <Route index element={<Dashboard />} /> 
                            <Route path="income" element={<Income />} /> 
                            <Route path="reviews" element={<Reviews />} /> 
                        </Route> */}

                        <Route path="/about" element={<About />} /> 
                        <Route path="/contact" element={<Contact />} /> 
                        <Route path="/*" element={<NotFound />} /> 
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </PostsContextProvider>
        </AuthProvider>
    </ThemeContextProvider>
  )
}

export default App