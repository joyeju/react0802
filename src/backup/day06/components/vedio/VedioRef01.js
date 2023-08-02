import React, { useState, useRef } from 'react'
import medias from '../../medias/vinyl.mp4'
// public 폴더에 들어 있다면 <source src="./medias/vinyl.mp4"/>

const VedioRef = () => {
    const videoRef = useRef(); //
    console.log('video', videoRef); // {current: video}

    const playHandle = ()=>{
        //console.log( document.querySelector('video'))
        // console.log('video', videoRef);
        const vedio = videoRef.current;
        vedio.play();
    }
    const stopHandle = ()=>{
        console.log( document.querySelector('video'))
        const vedio = videoRef.current;
        vedio.pause();
    }
  return (
    <div className='vedio-container'>
        <video width={"400px"}  ref={videoRef}>
            <source src={medias}/>
        </video>
        <div className='ctrl_btn'>
            <button  onClick={ playHandle }>재생</button>
            <button  onClick={ stopHandle }>멈춤</button>
        </div>
    </div>
  )
}

export default VedioRef