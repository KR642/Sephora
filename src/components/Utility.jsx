import React from 'react'
import sephora from '../assets/sephora-logo.svg'
import SearchBar from './SearchBar'
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";

const Utility = () =>{
  return (
    <div className='flex flex-row justify-around py-4'>
        <div className='w-[20%]'>
            <img src={sephora} alt="Sephora Logo" />
        </div>
        <SearchBar/>
        <div className='flex flex-row justify-center items-center w-[20%]'>
            <MdOutlineLocationOn className='text-[18px]'/>
            <a href="#" className='text-black font-fontMedium text-[14px] p-1'>Location & Services</a>
        </div>
        <div className='flex flex-row justify-around items-center w-[10%]'>
            <a href="#"><FaRegUserCircle className='text-[24px]'/></a>
            <a href="#"><MdFavoriteBorder className='text-[24px] '/></a>
            <a href="#"><MdOutlineShoppingBag className='text-[24px]'/></a>
        </div>
    </div>
  )
}

export default Utility