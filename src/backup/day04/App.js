import React, {useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Board from './container/Board'
import Theme from './components/Theme'
import './App.css'
import Coins from './container/Coins'
import Fade from './components/fadeinout/Fade'

// props : 왜 필요할까?
const datas = [
    {
      title:"주식",
      content : "주식 콘텐트"
    },
    {
      title:"영어",
      content : "영어 콘텐트"
    },
    {
      title:"고전",
      content : "고전 콘텐트"
    },
    {
      title:"인테리어",
      content : "인테리어 콘텐트"
    },
    {
      title:"다이어트",
      content : "다이어트 콘텐트"
    }
  ]

const App = () => {
    const [ theme, setTheme ] = useState(false);
    const  logo = "KOREA";
  return (
    <div>
        <Theme theme={theme} setTheme={setTheme} />
        {/* <img src="경로" alt="설명" title="설명"  class="img" id="img" /> */}
        <Header logo={logo}  theme={theme} />
        {/* <Board  theme={theme}  tabDatas={datas} /> */}
        {/* <Coins /> */}
        <Fade />
        <Footer theme={theme} />
    </div>
    
  )
}

export default App



