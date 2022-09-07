import React from 'react'
import { Link } from 'react-scroll'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsDribbble} from 'react-icons/bs'
import {AiFillYoutube} from 'react-icons/ai'
export default function Ninth() {
  return (
    <div className='h-[50vh] bg-[rgb(219,65,64)]'>
        <div>
            <ul className='md:flex md:w-[50%] cursor-pointer text-white font-bold text-[16px] mt-12 md:mt-[-3rem] md:pt-[10vh] ml-12 md:ml-[-3rem]  justify-evenly'>
               <Link  to='proj' spy={true} smooth={true} offset={50} duration={1000}>
                <li className='pt-12 md:pt-0'>PROJECTS</li>
               </Link>
               <Link  to='Client' spy={true} smooth={true} offset={50} duration={1000}>
                <li className='mt-4 md:mt-[-1rem]'>CLIENTS</li>
               </Link>
               <Link  to='Services' spy={true} smooth={true} offset={50} duration={1000}>
                <li className='mt-4 md:mt-[-1rem]'>SERVICES</li>
               </Link>
               
                <li className='mt-4 md:mt-[-1rem]'>CONTACT</li>
            </ul>
            <h1 className='text-3xl md:ml-16 ml-12 text-white font-bold md:pt-[6vh] pt-[2vh]'>Uniel</h1>
            <p  className='text-  md:ml-16 ml-12  text-white  md:pt-4'>Made by Unbound Studio in Guatemala City.</p>
        </div>
        <div className='flex text-white md:w-[14%] md:ml-[50.5vw] -mt-7 justify-evenly py-10 w-[40vw] ml-[4vw] text-xl cursor-pointer'>
        <Link  to='home' spy={true} smooth={true} offset={50} duration={1000}>
                 <FaFacebookF className='hover:text-gray-400 hover:scale-150'/>
        </Link>
        <Link  to='home' spy={true} smooth={true} offset={50} duration={1000}>
                <AiOutlineInstagram className=' hover:text-gray-400 hover:scale-150'/>
        </Link>
        <Link  to='home' spy={true} smooth={true} offset={50} duration={1000}>
                 <AiOutlineTwitter className=' hover:text-gray-400 hover:scale-150'/>        
        </Link>
        <Link  to='home' spy={true} smooth={true} offset={50} duration={1000}>
                <BsDribbble className=' hover:text-gray-400 hover:scale-150'/>
        </Link>
        <Link  to='home' spy={true} smooth={true} offset={50} duration={1000}>
                <AiFillYoutube className=' hover:text-gray-400 hover:scale-150'/>
        </Link>
    </div>
    </div>
  )
}
