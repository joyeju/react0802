import React from 'react'
import Slider from './components/sliders/Slider' 
import MySwiper from './components/swiper/MySwiper'
import VedioRef from './components/vedio/VedioRef'
import Todos from './todos/Todos'

const App = () => {
  return (
    <>
    <div style={{width:"1600px"}}>
        <VedioRef />
    </div>
    <Todos />
    </>
  )
}

export default App