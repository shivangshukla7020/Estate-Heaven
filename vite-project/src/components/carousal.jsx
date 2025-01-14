import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from './carousal-images/1.jpg';
import img2 from './carousal-images/2.jpg';
import img3 from './carousal-images/3.jpg';
import img4 from './carousal-images/4.jpg';

import './carousal.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="Slide 5" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
