import React, { useContext, useState , useEffect} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import {
  Header, 
  Footer,  
  NavBar
} from './components'


import { AuthContext } from './contexts/AuthContext'

import {
  Main, 
  Coins, 
  CoinDetail,
  Posts, 
  PostDetail,
  Login,
  NotFound,
  NewPost
} from './routes'

import { format  } from 'date-fns';
import PostLayout from './layouts/PostLayout'
import Charts from './charts/Charts'

const App = () => {
  const { user }= useContext(AuthContext);
  
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
          <Route path="/"  element={<Main />} />
          <Route path="/main"  element={<Main />} />

          <Route path="/coins"  element={<Coins />} />
          <Route path="/coins/:id"  element={<CoinDetail />} />

          <Route path='/posts'  relative="path"  element={ <PostLayout   /> } >
              <Route index  element={ <Posts   />} />
              <Route path=":id"  element={ <PostDetail  />} />
              <Route path="newpost"  element={ <NewPost  />} />
              
          </Route>
          {/* PostLayout end  */}
        
          <Route path = "charts" element={<Charts />}/>
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

// 여러분들 것도 배포하기 : 주말에 URL 업로드하기 
// https://web-frontend-07-7xwyjq992llivdr0fu.sel4.cloudtype.app/