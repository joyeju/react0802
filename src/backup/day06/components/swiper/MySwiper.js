import React, { useRef, useState } from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/pagination';

import './MySwiper.css';
import { Pagination } from 'swiper/modules';
import banners from '../constants/banner';
import SliderImg from '../sliders/SliderImg';

export default function MySwiper() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            banners.map(banner=>(
                <SwiperSlide>
                    <SliderImg banner={banner}/>
                </SwiperSlide>
            ))
        }
         
      </Swiper>
    </>
  );
}
