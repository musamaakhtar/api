import React from 'react'
import { Link } from 'react-scroll'
// import {IoReorderThreeSharp} from 'react-icons/io'
import {GoThreeBars} from 'react-icons/go'
export default function Navbar() {
  return(
    <div className='fixed top-0 bg-white w-[100%] pb-6 z-10'>
        <h1 className='text-gray-700 text-3xl ml-[5.5vw] mt-[3vh] w-[10%] font-semibold'>Uniel</h1>
    <nav>
      <button type='button' className='ml-[85vw] md:invisible text-3xl hover:text-gray-400 mt-[-10vh]  justify-center p-2 rounded-md'>
      <GoThreeBars/>
        </button>
    <ul className='flex tracking-widest invisible  md:visible -mt-12 font-mono font-semibold lg:w-[60%] md:w-[70%] lg:ml-[35vw] md:ml-[28vw] text-base justify-evenly'>
      <Link to='home' activeClass="active" spy={true} smooth={true} offset={50} duration={1000}>
      <li className='hover:text-[rgb(237,72,82)] hover:cursor-pointer '>HOME</li>
      </Link>
      <Link to='proj' activeClass="active" spy={true} smooth={true} offset={50} duration={1000}>
      <li className='hover:text-[rgb(237,72,82)] hover:cursor-pointer '>PROJECTS</li>
      </Link>
      <Link to='Services' activeClass="active" spy={true} smooth={true} offset={50} duration={1000}>
        <li className='hover:text-[rgb(237,72,82)] hover:cursor-pointer '>SERVICES</li>
      </Link>
      <Link to='About' activeClass="active" spy={true} smooth={true} offset={50} duration={1000}>
        <li className='hover:text-[rgb(237,72,82)] hover:cursor-pointer '>ABOUT</li>
      </Link>
      <Link to='Team' activeClass="active" spy={true} smooth={true} offset={50} duration={1000}>
        <li className='hover:text-[rgb(237,72,82)] hover:cursor-pointer '>TEAM</li>
      </Link>
      <Link to='Client' activeClass="active" spy={true} smooth={true} offset={50} duration={1000}>
        <li className='hover:text-[rgb(237,72,82)] hover:cursor-pointer '>CLIENT</li>
      </Link>
      <Link to='Contact' activeClass="active" spy={true} smooth={true} offset={50} duration={1000}>
        <li className='hover:text-[rgb(237,72,82)] hover:cursor-pointer '>CONTACT</li>
      </Link>
    </ul>
    </nav>
    </div> 
  )
}