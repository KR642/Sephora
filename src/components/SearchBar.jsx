import React from 'react'
import { MdOutlineSearch } from "react-icons/md";
const SearchBar = () => {
  return (
    <div className='flex flex-row text-black items-center rounded-3xl border border-1 border-solid border-banner w-[30%] justify-around'>
        <MdOutlineSearch className='text-[20px]'/>
        <input type="text" name="searchtxt" id="searchtxt" placeholder='Search products and brands...' className='w-[90%]'/>
    </div>
  )
}

export default SearchBar