import React from 'react'
import Slide1 from './../assets/images/slider-image-1.jpeg'
import Slide2 from './../assets/images/slider-image-2.jpeg'
import Slide3 from './../assets/images/slider-image-3.jpeg'
import Banner1 from './../assets/images/ad-banner-1.jpg'
import Banner2 from './../assets/images/ad-banner-2.jpg'
import Slider from "react-slick";

export default function MainSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return <>
  
  <div className='flex w-full'>
    <div className='w-3/4'>
    <Slider {...settings}>
       <img src={Slide1} alt='Slider-image' className='h-[400px] object-cover'/>
       <img src={Slide2} alt='Slider-image' className='h-[400px] object-cover'/>
       <img src={Slide3} alt='Slider-image' className='h-[400px] object-cover'/>
        </Slider>
    </div>
    <div className='w-1/4'>
    <img src={Banner1} alt='Banner' className='h-[200px]'/>
    <img src={Banner2} alt='Banner' className='h-[200px]'/>
    </div>
  </div>
  </>
  
}
