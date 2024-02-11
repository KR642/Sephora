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

const ProductDisplay = () => {
    return (
        <div className="container">
            <h1 className="heading">Flower Gallery</h1>
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
                    pagination={{ el: '.swiper-pagination', clickable: true }}
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
            <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
            </div>
            </Swiper>
        </div>
        );
}
export default ProductDisplay
