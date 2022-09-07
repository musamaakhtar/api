import React from 'react'
import ImgUD from '../images/ur.jpg'
import ImgUj from '../images/usamajutt.jpeg'
import Imgp from '../images/parizaad.jpeg'
import Imga from '../images/abid.jpeg'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsDribbble} from 'react-icons/bs'
import {AiFillYoutube} from 'react-icons/ai'
export default function Sixth() {
  return (
    <div id='Team' className='h-[auto] w-[100%] bg-[rgb(219,65,64)]  mt-28 border border-black'>
        <div>
        <h1 className='text-white font-bold text-6xl ml-[5vw] mt-8 md:mt-[20vh]'>Our Team</h1>
        </div> 
        <div className='md:flex flex flex-wrap justify-evenly mt-14'>
            <div className='h-[55vh] md:w-[18%] w-[45%]'>
              <div className='h-[50%] w-[100%]'>
               <img src={ImgUD} alt="" />
              </div>
              <div className='h-[50%] w-[100%] border-2 border-white'>
              <h1 className='text-white text-center -ml-6  font-bold font-mono text-2xl mt-6'>Usama Rajpoot</h1>
              <h1 className='text-white ml-8  font-mono mt-2'>Web & App Develpor</h1>
              <div className='flex text-white w-[70%] ml-4 mt-10 justify-evenly text-lg cursor-pointer'>
                 <FaFacebookF className='hover:text-gray-400'/>
                 <AiOutlineInstagram className=' hover:text-gray-400'/>
                 <AiOutlineTwitter className=' hover:text-gray-400'/>
                 <BsDribbble className=' hover:text-gray-400'/>
                 <AiFillYoutube className=' hover:text-gray-400'/>
                   </div>
              </div>
            </div>
            <div className='h-[55vh] md:w-[18%]  w-[45%]'>
              <div className='h-[50%] overflow-hidden w-[100%] '>
               <img className='h-[170%] w-[100%]' src={ImgUj} alt="" />
              </div>
              <div className='h-[50%] w-[100%] border-2 border-white'>
              <h1 className='text-white ml-8 font-bold font-mono text-2xl mt-6'>Usama Jutt</h1>
              <h1 className='text-white ml-8  font-mono mt-2'>Assistance Commissioner</h1>
              </div>
              <div className='flex text-white w-[70%] ml-4 -mt-14 justify-evenly text-lg cursor-pointer'>
                 <FaFacebookF className='hover:text-gray-400'/>
                 <AiOutlineInstagram className=' hover:text-gray-400'/>
                 <AiOutlineTwitter className=' hover:text-gray-400'/>
                 <BsDribbble className=' hover:text-gray-400'/>
                 <AiFillYoutube className=' hover:text-gray-400'/>
                   </div>
            </div>
            <div className='h-[55vh] mt-4 md:mt-[-2px] md:w-[18%] w-[45%]'>
              <div className='h-[50%] w-[100%]'>
               <img className='h-[100%] w-[100%]' src={Imgp} alt="" />
              </div>
              <div className='h-[50%] w-[100%] border-2 border-white'>
              <h1 className='text-white ml-8 font-bold font-mono text-2xl mt-6'>Arslan Jutt</h1>
              <h1 className='text-white ml-8  font-mono mt-2'>Peptiside Master</h1>
              </div>
              <div className='flex text-white w-[70%] ml-4 -mt-14 justify-evenly text-lg cursor-pointer'>
                 <FaFacebookF className='hover:text-gray-400'/>
                 <AiOutlineInstagram className=' hover:text-gray-400'/>
                 <AiOutlineTwitter className=' hover:text-gray-400'/>
                 <BsDribbble className=' hover:text-gray-400'/>
                 <AiFillYoutube className=' hover:text-gray-400'/>
                   </div>
            </div>
            <div className='h-[55vh] mt-4 md:mt-[-2px] md:w-[18%] w-[45%]'>
              <div className='h-[50%] w-[100%]'>
               <img className='h-[100%] w-[100%]' src={Imga} alt="" />
              </div>
              <div className='h-[50%] w-[100%] border-2 border-white'>
              <h1 className='text-white ml-8 font-bold font-mono text-2xl mt-6'>Abid Ch</h1>
              <h1 className='text-white ml-8  font-mono mt-2'>Mathematician</h1>
              <div className='flex text-white w-[70%] ml-4 mt-10 justify-evenly text-lg cursor-pointer'>
                 <FaFacebookF className='hover:text-gray-400'/>
                 <AiOutlineInstagram className=' hover:text-gray-400'/>
                 <AiOutlineTwitter className=' hover:text-gray-400'/>
                 <BsDribbble className=' hover:text-gray-400'/>
                 <AiFillYoutube className=' hover:text-gray-400'/>
                   </div>
              </div>
            </div>
            <div className='h-[55vh] mt-4 md:mt-[-4px] md:w-[16%] w-[45%] border border-white'>
               <h1 className='text-white text-2xl font-bold ml-6 mt-12'>Join Us</h1>
               <p className='text-white ml-6 mt-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum dolor</p>
               <div className="w-[2vw] mt-12 ml-6 border-2 border-white"></div>
               <h1 className="font-bold text-lg hover:translate-x-2 duration-[1s] text-white mt-6 ml-6">Contact</h1>
              </div>
            </div>
        </div>
  )
}
