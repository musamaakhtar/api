import React from 'react'
import Img1 from '../images/frst.svg'
export default function First() {
  return (
    <div id='home' className='md:flex w-[100%] justify-evenly  bg-white pt-[28vh]'>
    <div className='w-[100%] h-[80vh]  '>
     <img src={Img1} alt="" />
    </div>
<div className=' w-[100%] text-gray-600  sm:h-[63vh] lg:h-[80vh] '>
   <h1 className='lg:text-7xl text-5xl font-bold w-[80%] lg:w-[80%] font-sans md:pt-10'>We Design & Build Creative Brands</h1>
   <p className='text-2xl mt-7 '>Duis aute irure dolor reprehenderit voluptate velit esse dolore nulla pariatur</p>
   <button type="button" class="h-[8vh] sm:w-[29vw] md:w-[17vw] font-bold inline-block px-6 py-2.5 bg-red-600 mt-10 text-white  text-md leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Learn More</button>
</div>
    </div>
  )
}
