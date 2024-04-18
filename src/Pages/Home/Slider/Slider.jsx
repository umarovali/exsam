import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// img 
import SliderImg1 from "../../../assets/images/slider/slider_img_1.webp"
import SliderImg2 from "../../../assets/images/slider/slider_img_2.png"
import SliderImg3 from "../../../assets/images/slider/slider_img_3.jpg"
import SliderImg4 from "../../../assets/images/slider/slider_img_4.png"


export default function Slider() {
  return (
    <section className='slider_section'>
      <div className="tagline_bg">
        <h1 className="tagline_title">Tagline: Your Gateway to Stylish Finds</h1>
      </div>
      <div className="container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className='slider'>
              <img className='slider_imgs' src={SliderImg1} alt="" />
              <h3 className='slider_title'>Save up to 50% Ends tomorrow</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider'>
              <img className='slider_imgs' src={SliderImg2} alt="" />
              <h3 className='slider_title'>Save up to 50% Ends tomorrow</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider'>
              <img className='slider_imgs' src={SliderImg3} alt="" />
              <h3 className='slider_title'>Save up to 50% Ends tomorrow</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider'>
            <img className='slider_imgs' src={SliderImg4} alt="" />
            <h3 className='slider_title'>Save up to 50% Ends tomorrow</h3>
          </div></SwiperSlide>

        </Swiper>
      </div>
    </section>
  )
}
