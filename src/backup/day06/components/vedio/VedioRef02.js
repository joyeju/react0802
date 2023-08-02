import React, { useState, useRef } from 'react'
import medias from '../../medias/vinyl.mp4'
// public 폴더에 들어 있다면 <source src="./medias/vinyl.mp4"/>

const VedioRef = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef();  

    // const playHandle = ()=>{  
    //     const vedio = videoRef.current;
    //     vedio.play();
    // }
    // const stopHandle = ()=>{ 
    //     const vedio = videoRef.current;
    //     vedio.pause();
    // }

    // const videoHandle = ()=>{
    //     setIsPlaying(!isPlaying);
    //     !isPlaying ? playHandle() : stopHandle();  
    // }
    const videoHandle = ()=>{
        const vedio = videoRef.current; 
        setIsPlaying(!isPlaying);
        !isPlaying ? vedio.play() : vedio.pause();
    }
  return (
    <div className='vedio-container'>
        <video width={"400px"}  ref={videoRef}>
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