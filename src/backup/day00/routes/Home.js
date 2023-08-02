import React, { useState } from 'react'

// Layout 컴포넌트 
// Outlet
// Wrapper = HOC 리엑트 컴포넌트 포장 기술 
import {
  Main,
  Skills,
  Contect,
  Aboutme,
  Work,
  DotLayout
} from '../components/home'
import './Home.css'

const Home = () => {
  const [isActive, setIsActive] = useState("main");
  return (
    <div>
      <DotLayout isActive={isActive}  setIsActive={setIsActive}/>
      <Main />
      <Aboutme />
      <Skills />
      <Work />
      <Contect />
    </div>
  )
}

export default Home