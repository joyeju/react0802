import React, { useContext} from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import {
  Header, 
  Footer, 
  Logo,
  NavBar
} from './components'


import { ThemeContext } from './contexts/ThemeContext'
import { AuthContext } from './contexts/AuthContext'

import {
  Main, 
  Coins, 
  CoinDetail,
  Posts, 
  PostDetail,
  Login,
  NotFound
} from './routes'

const App = () => {
  const { darkmode }= useContext(ThemeContext)
  const { user }= useContext(AuthContext)
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
          <Route path="/"  element={<Main />} />
          <Route path="/main"  element={<Main />} />
          <Route path="/coins"  element={<Coins />} />
          <Route path="/coins/coindetail"  element={<CoinDetail />} />
          <Route path="/posts"  element={<Posts />} />
          <Route path="/posts/postdetail"  element={<PostDetail />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/*"  element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App


// git repository 만들고
// axios, browserRoute, motions, wrapperComponent,  coins, board, CRUD, NODE, todos

// 여러분 들것도 배포하기 : 주말에 URL 업로드하기 
// https://web-frontend-07-7xwyjq992llivdr0fu.sel4.cloudtype.app/