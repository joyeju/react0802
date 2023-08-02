import React, { useRef, useState } from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';

// npm i swiper
// 1. 원하는 컴포넌트 찾기 
// 2. 코드샌드박스
// 3. props, context

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // 이전, 이후 버튼에 필요한 모듈
import 'swiper/css/pagination'; // indecator

import './styles.css'; 
 
import { Navigation, Pagination } from 'swiper/modules';
import banners from '../../constants/banner';

const MySwiper = () => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };

  return (
    <div className='myswiper-container'>
        <Swiper navigation={true} 
                pagination={pagination} 
                modules={[Navigation, Pagination]} 
                className="mySwiper"
        >
            {
                banners.map(banner=>(
                    <SwiperSlide>
                        <img src={banner} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}

export default MySwiper