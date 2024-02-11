import React from 'react'
import Banner from './Banner'
import banner from "../assets/banner-1.jpg";
import banner2 from "../assets/banner-2.jpg"
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useState, useEffect, useRef } from 'react';
const Slides = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const slides = [
        {
            bannerImg: banner,
            bannerTitle: "EMOTIONS LASTS FOREVER.",
            bannerDesc : "It’s the feeling that counts, spark a lifelong love affair with these gifts",
            bannerBg : "bg-light-greenbg",
            bannerLink :"#"
        },
        {
            bannerImg: banner2,
            bannerTitle: "SCENT SUPER SAVINGS",
            bannerDesc : "Whether you’re looking for a gift or yourself, it's the perfect time for a new scent",
            bannerBg : "bg-light-orangebg",
            bannerLink :"#"
        }
    ];

    // const nextSlide = () =>{
    //     setActiveSlide((prev)=>
    //         (prev+1) % slides.length
    //     )
    // }
    // const prevSlide = () =>{
    //     setActiveSlide((prev)=>
    //         (prev-1 + slides.length) % slides.length
    //     )
    // }
    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      };
      
      const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
      };
      
    
  return (
    <div className='w-100 relative'>
        <div className='slides'>
           {
               slides.map((slide, index)=>(
                    <Banner 
                        key = {index}
                        cl = {`slide ${activeSlide === index ? 'active' : ''}`}
                        bannerImg={slide.bannerImg}
                        bannerTitle={slide.bannerTitle}
                        bannerDesc={slide.bannerDesc}
                        bannerBg={slide.bannerBg}
                        bannerLink={slide.bannerLink}
                    />
               ))
           }
        </div>
        <div className='slideControl flex justify-between w-full absolute top-[50%]'>
                <button className="slide-button text-[60px] text-white" id="previous" onClick={prevSlide}><MdOutlineArrowBackIosNew /></button>
                <button className="slide-button text-[60px] text-white" id="next" onClick={nextSlide}><MdOutlineArrowForwardIos /></button>
        </div>
    </div>
  )
}

export default Slides
