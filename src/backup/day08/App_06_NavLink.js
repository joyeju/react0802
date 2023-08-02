import React, { useState } from 'react'
// https://reactrouter.com/en/main
// npm i react-router-dom
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './routes/Login'
import './App.css'
// import { Coins, Main, Posts, Login, NotFound} from './routes'
// index.js 생략
import { BrowserRouter, Routes, Route, Link, useParams, Outlet } from 'react-router-dom' 
import { NavLink  } from 'react-router-dom' 

/*
// http://localhost:3000
// http://localhost:3000/coins
// http://localhost:3000/coins/1 
// http://localhost:3000/posts
// http://localhost:3000/posts/33
// http://localhost:3000/posts/postdetail

NavLink는 Link에 active, onClick 자동화되도록 만들어둠
// 기본은 .active를 디자인하면 간단 
// 사용자클래스로 대체하고 싶음 
*/


const App = () => {
    const [ user, setUser ] = useState(null);
    const logoutHandle = ()=>{
         setUser(null)
    }

  return (
    <BrowserRouter>
        <Header user={user} />
        <nav className='lnb'>
            <ul>
                <li>
                  <NavLink to="/" 
                      className={({isActive})=> isActive ? "hello": ""}
                  >main</NavLink>
                </li>
                <li><NavLink to="/coins"
                       className={({isActive})=> isActive ? "hello": ""}
                >coins</NavLink></li>
                <li><NavLink to="/posts"
                       className={({isActive})=> isActive ? "hello": ""}
                >게시판</NavLink></li>
                <li><NavLink to="/host" 
                       className={({isActive})=> isActive ? "hello": ""}
                >host</NavLink> </li>
                <li>
                    {
                        !user 
                        ? <NavLink to="/login"  
                             className={({isActive})=> isActive ? "hello": ""}
                        >Login</NavLink>  
                        : <button onClick={logoutHandle}>LogOut</button> 
                    }
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/"  element={ <Main /> }/>

            <Route path="/coins"  element={ <Coins /> }/>
            <Route path="/coins/:id"  element={ <CoinDetail /> }/>
            <Route path="/posts"  element={ <Posts /> }/>
            <Route path="/posts/:name"  element={ <PostDetail/> }/>

            {/* relative Route 
                기본 route는 index로 표시 
                나머지 상대 라우트
            */}
            <Route path="/host" element={ <HostLayout /> }>
                <Route index element={<Host />} />
                <Route path="income"  element={<Income />} />
                <Route path="reviews"  element={<Reviews />} />
            </Route>

            <Route path="/login"  element={ 
                    <Login user={user} setUser={setUser}/> 
            }/>
            <Route path="/*"  element={ <NotFound /> }/>
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App

// react 디자인 패턴 
const HostLayout = () =>{
    return (
      <>
          <ul className='subMenu'>
            <li><NavLink to="/host" end
                 className={({isActive})=> isActive ? "hello": ""}
            >host</NavLink></li>
            <li><NavLink to="/host/income"
                   className={({isActive})=> isActive ? "hello": ""}
            >income</NavLink></li>
            <li><NavLink to="/host/reviews"
                   className={({isActive})=> isActive ? "hello": ""}
            >reviews</NavLink></li>
          </ul>
          <Outlet />
      </>
    )
}
const Host = () => {
  return (
    <div>Host Dashboard</div>
  )
}
const Income = () => {
  return (
    <div>Host Income</div>
  )
}
const Reviews = () => {
  return (
    <div>Host Reviews</div>
  )
}

const Main = () => {
    return (
      <div>Main</div>
    )
}

const Coins = () => {
    return (
      <div>Coins</div>
    )
}

const CoinDetail = () => {
  // const params = useParams();
  // console.log( params);

  const { id } = useParams();

  return (
    <div>CoinDetail { id } </div>
  )
}

const Posts = () => {
   return (
    <div>Posts</div>
  )
}

const PostDetail = () => {
    const params = useParams();
    console.log( params );
    return (
      <div>PostDetail { params.name } </div>
    )
 }

const NotFound = () => {
    return (
        <div>NotFound</div>
    )
}