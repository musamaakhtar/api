import React from 'react'
import Imgh from '../images/img4.jpg'
import {BsArrowRight} from 'react-icons/bs'
export default function Forth() {
  return (
    <div id='About'>
          <div className="md:flex text-white mt-14  bg-[rgb(237,72,82)]">
            <div className="md:h-[100vh] h-[50vh] mt-[15vh] bg-[rgb(237,72,82)]  w-[100%] md:w-[50%]">
                <h1 className="text-xl font-mono md:mt-[12vh] pt-10 ml-[4vw] ">THE STORY SO FAR</h1> 
                <h1 className="text-6xl font-mono font-extrabold md:mt-[6vh] mt-2 ml-[4vw]">About Us</h1>
                <p className="md:w-[80%] w-[90%] md:mt-[5vh] mt-2 text-base ml-[4vw]">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                <div className="md:w-[2vw] w-[4vw] md:mt-12 mt-4 ml-[4vw] border-2 border-white"></div>
                <h1 className="flex font-bold text-lg hover:translate-x-2 duration-[1s] md:mt-[10vh] mt-2 ml-[4vw] cursor-pointer">LIVE SITE <BsArrowRight className="ml-2 mt-1 text-xl"/></h1>
                </div>
            <img className='md:h-[90vh] h-[50vh] md:w-[45%] w-[94%]  md:mt-[15vh] mt-4 md:-ml-6 mx-auto'  src={Imgh} alt="" />
            </div>
    </div>
  )
}
