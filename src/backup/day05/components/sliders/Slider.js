import React,{ useState} from 'react'
import banners from '../../constants/banner'
//import {banner01, banner02} from '../../constants/banner'
import './Slider.css'
import { BsArrowLeftSquareFill,  BsArrowRightSquareFill} from "react-icons/bs";
import Indecators from './Indecators';

const Slider = () => {
    const [imgNum, setImgNum]=useState(0)

    const updateIndex = (index)=>{
        if( index < 0 ){
            index = 0;
        }else if( index > banners.length - 1){
            index = banners - 1
        }
        setImgNum(index);
    }
  return (
    <>
   

    <div className='slier-container'>
        {/* <button className='btns left_btn'>이전</button>
         <button className='btns right_btn'>이후</button>   */}
        <BsArrowLeftSquareFill   
                size="2rem"
                className={ imgNum === 0 ? 'btns left_btn active' :  'btns left_btn'}
                onClick={()=>updateIndex(imgNum-1)}
        />
        <BsArrowRightSquareFill  
                size="2rem"
                className={ imgNum === banners.length - 1 ? 'btns right_btn active' :  'btns right_btn'}
                onClick={()=>updateIndex(imgNum+1)}        
        />

        <Indecators banners={banners} 
                    imgNum={imgNum} 
                    updateIndex={updateIndex}
        />
        <div className='slider-box'
            style={{ left:`-${imgNum*100}vw`}}
        >
            {
                banners.map(banner=>(
                    <div className='slider-img' >
                        <img src={banner} />
                    </div>
                ))
            }
        </div> 
    </div>
        

    </>
  )
}

export default Slider