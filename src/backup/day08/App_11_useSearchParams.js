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
import { NavLink, useNavigate, useLocation  } from 'react-router-dom'   
import {  useSearchParams  } from 'react-router-dom' 

/*
위 import한 라우트 컴포넌트들은 각각 유기적으로 연동되어 사용될 수 있음 
Link, NavLink, useNavigate, useLocation , useSearchParams 

searchParams
sorting, filtering, pagination 사용 
? 뒤의 QueryString 을 사용하는 hook
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

                      state={{name:"kim", age:20}}
                  >main</NavLink>
                </li>
                <li><NavLink to="/coins"
                       style={({isActive})=> isActive ? hStyle: null}
                >coins</NavLink></li>

                <li><NavLink to="/users"
                       style={({isActive})=> isActive ? hStyle: null}
                >Users</NavLink></li>

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

            <Route path="/users"  element={ <Users /> }/>
            <Route path="/customers"  element={ <Customers /> }/>


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

// useSearchParams
const Users = ()=>{
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('name') ;
    console.log ( showActiveUsers )

    return(
      <div>
        <button onClick={()=>setSearchParams({filter:'active', name:'kim', age:20})}> Active Users </button>
        <button onClick={()=>setSearchParams({})}> Reset Users </button>
        <button onClick={()=>console.log( searchParams.toString() )}> searchParams </button>
      </div>
    )
}

const users = [
  { name: '김길동', type:"vip"},
  { name: '박서준', type:"silver"},
  { name: '은길동', type:"vip"},
  { name: '김연아', type:"gold"},
]

const Customers = ()=>{
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get('type') ;
  console.log ( showActiveUsers )

  const [ filter, setFilter ] = useState(users);

  const filterHandle = ( )=>{ 
    const userFilter =  users.filter(user=>user.type === showActiveUsers);
    setFilter( userFilter.length ? userFilter :  users );
  }

  useEffect(()=>{
    filterHandle();
  }, [ filterHandle ])
  
  return(
    <div>
      <ul>
        <li>
          <Link to="?type=vip">Vip</Link>
          <Link to="?type=silver">silver</Link>
          <Link to="?type=gold">gold</Link>
          <Link to=".">reset</Link>
        </li>
      </ul>
       {
            filter.map( user=> (
              <div  key={user.name}>
                  <h3   style={{ color : user.type === "vip" ? "red" : user.type === "silver" ? "yellow" : "gold"}}
                  >
                    name : { user.name}
                  </h3>
                  <hr />
              </div>
            ))
       }
    </div>
  )
}

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
  const navigate  = useNavigate();
  const location = useLocation();
  console.log('location : ', location );
  // {pathname: '/', search: '', hash: '', state: null, key: 'nublwgef'}
  // Link, NavLink 에서 state설정할 수 있음 

    return (
      <div>
          <button onClick={()=> navigate(12) }>forword</button>
      </div>
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

    const navigate = useNavigate(); //hook

    return (
      <div>
        <h2>PostDetail { params.name }</h2>  
        <button onClick={()=> navigate('/host', { state : { userid: 'jemicom'}})}>Host</button>
        <button onClick={()=> navigate(-12) }>gotoBack</button>
        
      </div>
    )
 }

const NotFound = () => {
    return (
        <div>NotFound</div>
    )
}