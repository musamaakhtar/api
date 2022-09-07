import React from 'react'
import Img4 from '../images/presentation.svg'
import Img5 from '../images/arrow.svg'
import Img6 from '../images/rocket.svg'
import Img7 from '../images/responsive.svg'
import Img8 from '../images/whiteboard.svg'
export default function Third() {
  return (
    <div>
        <div id='Services'>
            <h1 className='mt-[20vh] font-semibold text-base ml-[3vw]'>FULL SERVICE STUDIO</h1>
            <h1 className='mt-[7vh] font-bold text-gray-700 text-5xl ml-[3vw]'>Services</h1>
        </div>
        
        <div className='md:flex flex flex-wrap   justify-evenly mt-[10vh]'>
        <div className="border-2 border-black h-[45vh] md:h-[55vh] w-[45%] md:w-[16%]">
           <img className='h-[80%] w-[70%] mx-auto' src={Img4} alt="" />
           <div className= "w-[3vw]  ml-[2vw] border-2 border-black"></div>
           <h1 className='font-semibold ml-[2vw] mt-[3vh]  text-lg'>MARKETING</h1>
        </div>
        <div className=" bg-[rgb(219,65,64)]  text-white h-[45vh] md:h-[55vh]  w-[45%] md:w-[16%]">
           <img className='h-[80%] w-[70%] invert  mx-auto' src={Img5} alt="" id='aa' />
           <div className= "w-[3vw]  ml-[2vw] border-2 border-white"></div>
           <h1 className='font-semibold ml-[2vw] mt-[3vh] text-lg'>BRANDING</h1>
        </div>
        <div className="border-2 mt-4 md:-mt-1 border-black h-[45vh] md:h-[55vh] w-[45%] md:w-[16%]">
           <img className='h-[80%] w-[70%] mx-auto' src={Img6} alt="" />
           <div className= "w-[3vw]  ml-[2vw] border-2 border-black"></div>
           <h1 className='font-semibold ml-[2vw] mt-[3vh] text-lg'>MOTION</h1>
        </div>
        <div className="border-2 mt-4 md:-mt-1 border-black h-[45vh] md:h-[55vh] w-[45%] md:w-[16%]">
           <img className='h-[80%] w-[70%]  mx-auto' src={Img7} alt="" />
           <div className= "w-[3vw]  ml-[2vw] border-2 border-black"></div>
           <h1 className='font-semibold ml-[2vw] mt-[3vh] text-lg'>UI DESIGN</h1>
        </div>
        <div className="border-2 mt-4  md:-mt-1  border-black h-[45vh] md:h-[55vh] w-[45%] md:w-[16%]">
           <img className='h-[80%] w-[70%] mx-auto' src={Img8} alt="" />
           <div className= "w-[3vw]  ml-[2vw] border-2 border-black"></div>
           <h1 className='font-semibold ml-[2vw] mt-[3vh] text-lg'>UX DESIGN</h1>
        </div>



        </div>
    </div>
  )
}
