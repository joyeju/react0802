import React from 'react'
import banner1 from '../assets/1025771674996577818.jpeg'
import banner2 from '../assets/1179738118976914914.jpg'
import banner3 from '../assets/1277497983932987640.jpg'
import banner4 from '../assets/1349386344726859889.jpg'
import imgs from '../constants/assets'
// imgs = { img01, img02, img03, img04 }
import { img01, img02, img03, img04 } from '../constants/index'
import datas from '../constants/index03'

const Coins = () => {
  return (
    <div>
        <h2>public 폴더의 내용 사용 </h2>
        <div>
          <img src="./images/4607564680502824585.jpg" />
          <img src="./images/4731177447623741000.jpeg" />
          <img src="./images/5400205660609536329.jpg" />
          <img src="./images/5633695421680375356.jpg" />
        </div>
        <h2>assets : assets 이미지를 직접 import 하여 사용하기 </h2>
        <div>
            <img src={banner1} alt="설명"/>
            <img src={banner2} alt="설명"/>
            <img src={banner3} alt="설명"/>
            <img src={banner4} alt="설명"/>
        </div>
        <h2> constants 로 만들어진 객체 사용하기 1 </h2>
        <div>
            <img src={imgs.img01} alt="설명"/>
            <img src={imgs.img02} alt="설명"/>
            <img src={imgs.img03} alt="설명"/>
            <img src={imgs.img04} alt="설명"/> 
        </div>
        <h2> constants 로 만들어진 객체 중 필요한 것만 받아오기 </h2>
        <div>
            <img src={img01} alt="설명"/>
            <img src={img02} alt="설명"/>
            <img src={img03} alt="설명"/>
            <img src={img04} alt="설명"/> 
        </div>
        <h2> constants 로 만들어진 배열로 사용하기</h2>
        <div>
            <img src={datas[0]} alt="설명"/>
            <img src={datas[1]} alt="설명"/>
            <img src={datas[2]} alt="설명"/>
            <img src={datas[3]} alt="설명"/> 
        </div>
        <h2> constants 로 만들어진 배열로 컴포넌트 표현</h2>
        <div>
             {
                datas.map((img, index)=>(
                   <img src={img} alt={`img${index}`}/>
                ))
             }
        </div>

    </div>
  )
}

export default Coins