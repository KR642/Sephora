import React from 'react'

const Banner = ({bannerImg, bannerTitle, bannerDesc, bannerBg, bannerLink,cl}) => {
  return (
            <div className={`flex flex-row relative ${cl}`} id='parentSlide'>
                <h1 className='text-[50px] absolute text-white fontBold w-[25%] left-[40%] top-[20%] font-bold'>{bannerTitle}</h1>
                <div className='leftImg w-[50%]'>
                    <img src={bannerImg} alt="Banner image 1" className='height-[50vh]'/>
                </div>
                <div className = {`rightShade ${bannerBg} w-[60%] flex flex-col justify-end	 py-7 px-5`}>
                    <p className='py-4'>{bannerDesc}</p>
                    <a href={bannerLink} className='bannerBtn w-[30%] text-center'>SHOP NOW</a>
                </div>
            </div>    
  )
}

export default Banner