import React, { useState, useRef } from 'react'
import medias from '../../medias/vinyl.mp4' 
import './VedioRef.css'
 
const VedioRef = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef();  
 
    const videoHandle = ()=>{
        const vedio = videoRef.current; 
        setIsPlaying(!isPlaying);
        !isPlaying ? vedio.play() : vedio.pause();
    }
  return (
    <div className='vedio-container' >
        <video ref={videoRef} >
            <source src={medias}/>
        </video>
        <div className='ctrl_btn'>
           <button onClick={ videoHandle }>
            { !isPlaying ? "Play" : "Stop"}
           </button>
        </div>
    </div>
  )
}

export default VedioRef