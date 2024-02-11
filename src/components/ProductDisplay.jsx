import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../product.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Product from './Product';
import car1 from '../assets/car-1.jpg';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
const ProductDisplay = () => {
    return (
        <div className="container">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    }}
                   
                    navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                <SwiperSlide>
                    <Product/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={car1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={car1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={car1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={car1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={car1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={car1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={car1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={car1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={car1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={car1} alt="" />
                </SwiperSlide>
            <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
                <MdOutlineArrowBackIosNew/>
            </div>
            <div className="swiper-button-next slider-arrow">
                    <MdOutlineArrowForwardIos/>
            </div>
            <div className="swiper-pagination"></div>
            </div>
            </Swiper>
        </div>
        );
}
export default ProductDisplay
