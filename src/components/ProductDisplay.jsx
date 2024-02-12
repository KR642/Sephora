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
import car2 from '../assets/car-2.jpg';
import car3 from '../assets/car-3.jpg';
const ProductDisplay = () => {
    const productSlide = [
        {
           productImg: car1,
           productTitle: "SEPHORA COLLECTION"
        },
        {
            productImg: car2,
           productTitle: "NEW HAIR HEROES"
        },
        {
            productImg: car3,
            productTitle: "JO MALONE LONDON"
        },
        {
            productImg: car1,
            productTitle: "SEPHORA COLLECTION"
         },
         {
             productImg: car2,
            productTitle: "NEW HAIR HEROES"
         },
         {
             productImg: car3,
             productTitle: "JO MALONE LONDON"
         },
         {
            productImg: car1,
            productTitle: "SEPHORA COLLECTION"
         },
         {
             productImg: car2,
            productTitle: "NEW HAIR HEROES"
         },
         {
             productImg: car3,
             productTitle: "JO MALONE LONDON"
         },
         {
            productImg: car1,
            productTitle: "SEPHORA COLLECTION"
         },
         {
            productImg: car2,
           productTitle: "NEW HAIR HEROES"
        },

        
    ];
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
                    {
                        productSlide.map((product, index)=>(
                            <SwiperSlide key={index}>
                                <Product productImg = {product.productImg} productTitle={product.productTitle}/>
                            </SwiperSlide>
                        ))
                    }
                    {/* <SwiperSlide>
                        <Product />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={car1} alt="" />
                    </SwiperSlide> */}
            <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
                <MdOutlineArrowBackIosNew className='text-black text-2xl'/>
            </div>
            <div className="swiper-button-next slider-arrow">
                    <MdOutlineArrowForwardIos className='text-black text-2xl'/>
            </div>
            <div className="swiper-pagination"></div>
            </div>
            </Swiper>
        </div>
        );
}
export default ProductDisplay
