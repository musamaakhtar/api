import React from 'react'
export default function Fifth() {
    return (
      <div   className='md:flex md:ml-16 mt-[15vh]' id='About'> 
        <div className='md:w-[23vw]'>
        <h1  className='text-6xl font-bold text-gray-700 font-sans'>Key Facts</h1>
        <h1  className='md:text-[18rem] text-9xl  font-bold text-[rgb(219,65,64)] font-sans'>75</h1>
        <div className='w-[2vw]  ml-[2.5vw] md:mt[-4rem] font-serif border-2 border-black'></div>
        <h1  className='font-bold md:ml-[2.5vw] text-lg text-gray-700 tracking-wider mt-5'>SUCCESSFUL PROJECTS</h1>
        </div>
        <div className='flex md:flex-none mt-[-26vh] md:mt-[26vh]'>
        <div  className='md:ml-24 text-gray-700 md:w-[22vw]'>
        <h1   className='text-3xl mt-[27vh]  font-semibold font-sans'>Designed For Growth</h1>
        <h1   className='md:text-9xl text-7xl font-bold text-gray-700 font-sans'>24</h1>
        <div  className="w-[2vw]  ml-[.5vw] mt-6  font-serif border-2 border-black"></div>
        <h1   className='font-bold md:ml-[2.5vw] tracking-wider mt-5'>EMPLOYEES</h1>
        </div>
        <div  className='md:ml-10 ml-[-24vw] w-[18vw]'>
        <h1   className='md:text-9xl text-7xl font-bold text-gray-700 font-sans mt-[32vh]'>16</h1>
        <div  className="w-[2vw]  ml-[2.5vw] mt-7 font-serif border-2 border-black"></div>
        <h1   className='font-bold ml-[1.5vw] tracking-wider mt-5'>YEARS</h1>
        </div>
        <div  className='w-[17vw] ml-10 md:ml-[-2.5rem]'>
        <h1   className='md:text-9xl text-7xl  font-bold text-gray-700 font-sans mt-[32vh]'>3</h1>
        <div  className="w-[2vw]  ml-[.5vw] mt-7 font-serif border-2 border-black"></div>
        <h1   className='font-bold ml-[.5vw] tracking-wider mt-5'>LOCATION</h1>
        </div>
        </div>
        </div>
)
}