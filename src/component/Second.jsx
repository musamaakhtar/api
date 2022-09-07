import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../index";
import Img2 from '../images/slider1.jpg'
import Img3 from '../images/slider2.jpg'
import {BsArrowRight} from 'react-icons/bs'
import { Navigation } from "swiper";
export default function Second() {
  return (
    <div className=" text-white mt-[10vh]" id="proj">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="w-[92%] md:h-[100%] md:flex">
            <div className="w-[100%] h-[30%]">
            <img  src={Img2} alt="" />
            </div>
            <div className="md:h-[100vh] md:mt-[15vh] bg-[rgb(237,72,82)] w-[100%] h-[50%]  md:w-[50%]">
                <h1 className="text-xl -mt-12 font-mono md:mt-[9vh] ml-[4vw] ">FEATURED PROJECT</h1> 
                <h1 className="md:text-6xl text-4xl font-mono font-extrabold md:mt-[6vh] ml-[4vw]">Coloca Branding</h1>
                <p className="md:w-[80%] md:mt-[6vh] mt-[7px] text-base ml-[4vw]">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                <div className="w-[2vw] mt-5 md:mt-12 ml-[4vw] border-2 border-white"></div>
                <h1 className="flex font-bold text-lg hover:translate-x-2 duration-[1s] md:mt-[4vh] mt-[14px] pb-[20vh] ml-[4vw] cursor-pointer">LIVE SITE <BsArrowRight className="ml-2 mt-1 text-xl"/></h1>
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-[92%] md:h-[100%] md:flex">
            <div className="w-[100%] h-[30%]">
            <img  src={Img3} alt="" />
            </div>
            <div className="md:h-[100vh] md:mt-[15vh] bg-[rgb(237,72,82)] w-[100%] h-[50%] md:w-[50%]">
                <h1 className="text-xl -mt-12 font-mono md:mt-[9vh] ml-[4vw] ">FEATURED PROJECT</h1> 
                <h1 className="md:text-6xl text-4xl font-mono font-extrabold md:mt-[6vh] ml-[4vw]">Banking App</h1>
                <p className="md:w-[80%] md:mt-[6vh] mt-[7px] text-base ml-[4vw]">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                <div className="w-[2vw] mt-5 md:mt-12 ml-[4vw] border-2 border-white"></div>
                <h1 className="flex font-bold text-lg hover:translate-x-2 duration-[1s] md:mt-[4vh] mt-[14px] pb-[20vh] ml-[4vw] cursor-pointer">LIVE SITE <BsArrowRight className="ml-2 mt-1 text-xl"/></h1>
                </div>
                </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}