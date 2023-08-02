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

/*
// http://localhost:3000
// http://localhost:3000/coins
// http://localhost:3000/coins/1 
// http://localhost:3000/posts
// http://localhost:3000/posts/33
// http://localhost:3000/posts/postdetail

NestRoute
// nav
// http://localhost:3000/host/dashboard
// http://localhost:3000/host/icome
// http://localhost:3000/host/reviews

Outlet
공통 코드를 레이아웃으로 감싸서 Outlet 에 표시 
*/


const App = () => {
    const [ user, setUser ] = useState(null);
    const logoutHandle = ()=>{
         setUser(null)
    }

    const [lnbIndex ,  setLnbIndex] = useState(1);

  return (
    <BrowserRouter>
        <Header user={user} />
        <nav className='lnb'>
            <ul>
                <li><Link to="/" className={ lnbIndex === 1 ? "active" : ""}
                              onClick={()=> setLnbIndex(1)}
                >main</Link></li>
                <li><Link to="/coins" className={ lnbIndex === 2 ? "active" : ""}
                              onClick={()=> setLnbIndex(2)}
                >coins</Link></li>
                <li><Link to="/posts"
                          className={ lnbIndex === 3 ? "active" : ""} 
                          onClick={()=> setLnbIndex(3)}
                >게시판</Link></li>
                <li><Link to="/host" className={ lnbIndex === 4 ? "active" : ""} 
                          onClick={()=> setLnbIndex(4)}
                >host</Link>
                    {/* <ul>
                      <li><Link to="/host">host</Link></li>
                      <li><Link to="/host/income">income</Link></li>
                      <li><Link to="/host/reviews">reviews</Link></li>
                    </ul> */}
                </li>
                <li><a href="http://www.naver.com"
                    className={ lnbIndex === 5 ? "active" : ""} 
                    onClick={()=> setLnbIndex(5)}
                >네이버</a></li>
                <li>
                    {
                        !user 
                        ? <Link to="/login" 
                                className={ lnbIndex === 5 ? "active" : ""} 
                                onClick={()=> setLnbIndex(5)}
                        >Login</Link> 
                        // : <Link to="/">LogOut</Link> 
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
            <li><Link to="/host">host</Link></li>
            <li><Link to="/host/income">income</Link></li>
            <li><Link to="/host/reviews">reviews</Link></li>
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