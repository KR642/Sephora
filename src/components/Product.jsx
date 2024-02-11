import React, { useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import car1 from '../assets/car-1.jpg';
function Product() {
    return(
        <div className=''>
            <h1>Big kona</h1>
            <img src={car1} alt="" />
        </div>
    )
}
export default Product;
