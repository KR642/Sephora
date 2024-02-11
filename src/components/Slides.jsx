import React from 'react'
import Banner from './Banner'
import banner from "../assets/banner-1.jpg";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useState } from 'react';
const Slides = () => {
  return (
    <div className='w-100 relative'>
        <div className='slides'>
            <Banner cl="slide firstSlide active" bannerImg = {banner} bannerTitle = "EMOTIONS LASTS FOREVER." 
        bannerDesc = "It’s the feeling that counts, spark a lifelong love affair with these gifts" 
        bannerBg = {"bg-light-greenbg"} bannerLink ="#" />
            <Banner cl="slide secondSlide" bannerImg = {banner} bannerTitle = "EMOTIONS LASTS FOREVER." 
        bannerDesc = "It’s the feeling that counts, spark a lifelong love affair with these gifts" 
        bannerBg = {"bg-light-greenbg"} bannerLink ="#" />
        </div>
        <div className='slideControl flex justify-between w-full absolute top-[50%]'>
                <button class="slide-button text-[60px] text-white" id="previous"><MdOutlineArrowBackIosNew /></button>
                <button class="slide-button text-[60px] text-white" id="next"><MdOutlineArrowForwardIos /></button>
        </div>
    </div>
  )
}

export default Slides
