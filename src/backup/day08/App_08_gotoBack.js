import React, { useState, useEffect } from 'react'
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


뒤로가기 gotoBack
. 현재 route
.. 이전 route

*/


const App = () => {
    const [ user, setUser ] = useState(null);
    const logoutHandle = ()=>{
         setUser(null)
    }

    const hStyle = {
        backgroundColor : "yellow",
        color: "orange",
        textDecoder : "underline"
    }
  return (
    <BrowserRouter>
        <Header user={user} />
        <nav className='lnb'>
            <ul>
                <li>
                  <NavLink to="/" 
                      style={({isActive})=> isActive ? hStyle: null}
                  >main</NavLink>
                </li>
                <li><NavLink to="/coins"
                       style={({isActive})=> isActive ? hStyle: null}
                >coins</NavLink></li>
                <li><NavLink to="/posts"
                       style={({isActive})=> isActive ? hStyle: null}
                >게시판</NavLink></li>
                <li><NavLink to="/host" 
                       style={({isActive})=> isActive ? hStyle: null}
                >host</NavLink> </li>
                <li>
                    {
                        !user 
                        ? <NavLink to="/login"  
                             style={({isActive})=> isActive ? hStyle: null}
                        >Login</NavLink>  
                        : <button onClick={logoutHandle}>LogOut</button> 
                    }
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/"  element={ <Main /> }/>

            {/* layout 별도로 만들지 않고 Outlet을 직접 레이아웃으로 사용  */}
            <Route path="/coins" element={<Outlet />}>
              <Route index  element={ <Coins /> }/>
              <Route path=":id"  element={ <CoinDetail /> }/>
            </Route>

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
      <div>
        <ul>
          <li><Link to="/coins/1"> params 1</Link></li>
          <li><Link to="/coins/2"> params 2</Link></li>
          <li><Link to="/coins/3"> params 3</Link></li>
          <li><Link to="/coins/4"> params 4</Link></li>
        </ul>
      </div>
    )
}

const CoinDetail = () => {
  // const params = useParams();
  // console.log( params);

  const { id } = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(()=>{
      // fetch()

      setCoin( id )
  }, [id])

  return (
    <div> 
        <h2>CoinDetail { id }</h2>   
        {
          coin ? (
              <div>
                코인 내용 출력 

                {/* <Link to="/coins"> gotoBack </Link> */}
                <Link to=".."> gotoBack </Link>
              </div>
          ) : (
            <div>
                Loading ...
            </div>
          )
        }
    </div>
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