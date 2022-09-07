import React from 'react'

export default function Eighth() {
  return (
    <div id='Contact' className=' md:flex md:h-[75vh] md:mt-[15vh] -mt-44'>
      <div className='h-[70vh] md:w-[30%] w-[88%] ml-16 mt-10'>
        <h1 className='font-semibold  text-gray-700'>LET'S TALK</h1>
        <h1 className='text-5xl font- font-bold text-gray-700 mt-10 ml-2'>Contact</h1>
        <p className='mt-10 text-gray-700'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum eu fugia.</p>
        <h1 className='font-bold text-xl mt-16'>Phone: <span className='text-[rgb(219,65,64)] underline hover:text-black cursor-pointer'>0300-2850323</span></h1>
        <h1 className='font-bold text-xl mt-5'>E-Mail: <span className='text-[rgb(219,65,64)] underline hover:text-black cursor-pointer'>Musamaakhtar68@gmail.com</span></h1>     
      </div>
      <div className='h-[84vh] md:ml-[16vw] md:mt-[10vh] shadow-2xl md:w-[44%] w-[90%] mx-auto bg-[rgb(219,75,75)]'>
            <h1 className='mt-10 ml-[5%] text-lg font-bold text-white'>SEND US A MESSAGE</h1>
            <input className='w-[90%] h-16 bg-transparent border border-white text-white font-bold text-lg mt-8 ml-[5%] pl-2 ' type="text" id='aa' placeholder='Full Name' />
            <input className='w-[90%] h-16 bg-transparent border border-white text-white font-bold text-lg mt-2 ml-[5%] pl-2 ' type="text" id='aa' placeholder='E-Mail Address'/>
            <input className='w-[90%] h-16 bg-transparent border border-white text-white font-bold text-lg mt-2 ml-[5%] pl-2 ' type="text" id='aa' placeholder='Reason For Contacting Us'/>
            <input className='w-[90%] h-36 bg-transparent border border-white text-white font-bold text-lg mt-2 ml-[5%] pl-2 ' type="text" id='aa' placeholder='Message'/>
            <button className='h-14 px-12 mt-6 ml-[5%] text-medium font-bold bg-white text-black'>SEND MESSAGE</button>
        </div>

    </div>
  )
}
