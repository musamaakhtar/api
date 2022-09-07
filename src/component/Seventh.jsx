import React from 'react'
import Imgl1 from '../images/logo-1.svg'
import Imgl2 from '../images/logo-2.svg'
import Imgl3 from '../images/logo-3.svg'
import Imgl4 from '../images/logo-4.svg'
import Imgl5 from '../images/logo-5.svg'
import Imgl6 from '../images/logo-6.svg'
export default function Seventh() {
  return (
    <div id='Client'>
<div className='md:flex justify-evenly mt-28'>
        <div className='h-[40vh] md:w-[20%] ml-16 w-[100%]'>
            <h1 className='text-xl font-mono ml-2'>Selected</h1>
            <h1 className='text-5xl font-semibold text-gray-600 ml-4 mt-12'>Clients</h1>
            <div className='w-[2vw] mt-[10vh] ml-6 border-2 border-[rgb(219,65,64)]'></div>
            <h1 className="font-bold text-lg hover:translate-x-2 duration-[1s] text-[rgb(219,65,64)] mt-6 ml-6">Contact</h1>
        </div>
        <div className='h-[40vh]  bg-[rgb(219,65,64)] w-[95%] ml-[2.5%] md:ml-[-2.5%] md:w-[20%]'>
         <div className='h-[70%] w-[100%]'>
              <img className='invert w-[80%] mt-4 mx-auto' src={Imgl1} alt="" />
         </div>
         <div className='h-[30%] w-[100%]'>
            <div className='border-[1.5px] md:w-[1.5vw] ml-[48%] bg-white  border-white w-[3vw]'></div>
            <h1 className='text-white text-center text-xl mt-2 font-mono md:ml-3 font-bold '>DEFAULT</h1>
         </div>
        </div>
        <div className='h-[40vh]  md:w-[20%] w-[100%] bg-gray-200'>
        <div className='h-[70%] w-[100%]'>
              <img src={Imgl2} alt="" />
         </div>
         <div className='h-[30%] w-[100%]'>
            <div className='border-[1.5px] md:w-[1.5vw] mx-auto md:mt-4 mt-6   border-black bg-black w-[3vw]'></div>
            <h1 className='text-gray-700 text-center text-xl mt-2 font-mono font-semibold'>DEFAULT</h1>
         </div>
        </div>
        <div className='h-[40vh] md:w-[20%] w-[100%] bg-gray-200'>
        <div className='h-[70%] w-[100%]'>
              <img src={Imgl3} alt="" />
         </div>
         <div className='h-[30%] w-[100%]'>
            <div className='border-[1.5px] md:w-[1.5vw]  mx-auto mt-6 md:mt-4 border-black bg-black w-[3vw]'></div>
            <h1 className='text-gray-700 text-center text-xl mt-2 font-mono font-semibold'>DEFAULT</h1>
         </div>
        </div>
</div>
    <div className='h-[40] w-[100%] md:flex justify-evenly mt-12'>
    <div className='h-[40vh] md:w-[20%] w-[100%] bg-gray-200'>
        <div className='h-[70%] w-[100%]'>
              <img src={Imgl4} alt="" />
         </div>
         <div className='h-[30%] w-[100%]'>
            <div className='border-[1.5px] md:w-[1.5vw]  mx-auto mt-6 md:mt-4 border-black bg-black w-[3vw]'></div>
            <h1 className='text-gray-700 text-center text-xl mt-2 font-mono font-semibold'>DEFAULT</h1>
         </div>
        </div>
        <div className='h-[40vh] md:w-[20%] w-[100%] bg-gray-200'>
        <div className='h-[70%] w-[100%]'>
              <img src={Imgl5} alt="" />
         </div>
         <div className='h-[30%] w-[100%]'>
            <div className='border-[1.5px] md:w-[1.5vw]  mx-auto mt-6 md:mt-4 border-black bg-black w-[3vw]'></div>
            <h1 className='text-gray-700 text-center text-xl mt-2 font-mono font-semibold'>DEFAULT</h1>
         </div>
        </div>
        <div className='h-[40vh] md:w-[20%] w-[100%] bg-gray-200'>
        <div className='h-[70%] w-[100%]'>
              <img src={Imgl6} alt="" />
         </div>
         <div className='h-[30%] w-[100%]'>
            <div className='border-[1.5px] md:w-[1.5vw]  mx-auto mt-6 md:mt-4 border-black bg-black w-[3vw]'></div>
            <h1 className='text-gray-700 text-center text-xl mt-2 font-mono font-semibold'>DEFAULT</h1>
         </div>
        </div>
        <div className='h-[40vh] w-[20%]'></div>
    </div>
    </div>
  )
}
