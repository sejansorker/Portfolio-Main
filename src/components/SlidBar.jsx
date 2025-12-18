import React, { useState } from 'react'
import Container from './Container'
import Me from "../assets/safi.png"
import { MdLocationPin, MdOutlineEmail } from 'react-icons/md'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { TbCalendar } from 'react-icons/tb'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { Meteors } from "@/components/ui/meteors"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import SS from "../assets/ss.jpg"
const SlidBar = () => {
  const [down, setDown] = useState(false)
  return (
    <>
      <div className="">
        <Container>
         <div className=" relative">
           <div className={`${down ? "h-[400px] " : "h-[150px]"} lg:px-0 border-1 border-amber-500  px-5 lg:h-[805px] w-full relative overflow-hidden pt-10 bg-[rgba(27,27,27,0.92)] text-white my-0 lg:my-5 rounded-[30px] duration-300 ease-in-out`}>
              <div className="h-full  absolute">
                <Meteors />
              </div>
            <div className="lg:text-center lg:gap-x-0 gap-x-5 flex lg:flex-col lg:w-[280px] w-full lg:mx-auto border-b-1 border-amber-500 lg:pb-7.5 pb-3">
              <div className=" lg:w-[200px] w-[90px] flex justify-center  lg:mx-auto">
                <img className='lg:w-45 lg:h-45 w-20 h-20  rounded-[50%]' src={SS} alt="" />
              </div>
              <div className="">
                <h2 className='lg:py-5.5 py-2 text-white lg:text-[30px] text-[18px] font-bold font-main'>Md. Sejan Sorker</h2>
                <h2 className='text-white lg:text-[16px]  text-[10px] font-normal lg:font-semibold rounded-[10px] mx-auto w-fit font-main lg:px-3.5 px-2 lg:py-2 py-1 bg-amber-500'>Frontend Developer</h2>
              </div>
            </div>
            <div className=" lg:mx-auto pt-5 lg:pt-6">
              <div className="flex items-center lg:justify-center">
                <div className="lg:h-10 lg:w-10 h-6 w-6 rounded-[5px] border-1 border-[#F8D568] flex items-center justify-center ">
                  <MdOutlineEmail className='text-[#F8D568] lg:text-[18px] text-[10px]' />
                </div>
                <div className="lg:pl-3 pl-2">
                  <p className='font-main font-normal lg:text-[14px] text-[10px] text-[rgba(255,255,255,0.54)]'>Email</p>
                  <Link to="https://sejansorker@gmail.com"><p className='font-main font-normal lg:text-[16px] text-[12px] text-white'>sejansorker@gmail.com...</p></Link>
                </div>
              </div>
              <div className="flex items-center lg:pl-[80px] lg:my-5 my-3">
                <div className="lg:h-10 lg:w-10 h-6 w-6  rounded-[5px] border-1 border-[#F8D568] flex items-center justify-center ">
                  <HiOutlineDevicePhoneMobile className='text-[#F8D568] lg:text-[18px] text-[10px]' />
                </div>
                <div className="lg:pl-3 pl-2">
                  <p className='font-main font-normal lg:text-[15px] text-[10px] text-[rgba(255,255,255,0.54)]'>Phone</p>
                  <Link to="">
                  <p className='font-main font-normal lg:text-[16px] text-[11px] text-white'>+8801780519010</p>
                  </Link>
                </div>
              </div>
              <div className="flex items-center lg:pl-[80px] ">
                <div className="lg:h-10 lg:w-10 h-6 w-6  rounded-[5px] border-1 border-[#F8D568] flex items-center justify-center ">
                  <TbCalendar className='text-[#F8D568] lg:text-[18px] text-[10px]' />
                </div>
                <div className="lg:pl-3 pl-2">
                  <p className='font-main font-normal lg:text-[15px] text-[10px] text-[rgba(255,255,255,0.54)]'>Birthday</p>
                  <p className='font-main font-normal lg:text-[16px] text-[11px] text-white'>1 July, 2004</p>
                </div>
              </div>
              <div className="flex items-center lg:pl-[80px] mt-5">
                <div className="lg:h-10 lg:w-10 h-6 w-6  rounded-[5px] border-1 border-[#F8D568] flex items-center justify-center ">
                  <MdLocationPin className='text-[#F8D568] lg:text-[18px] text-[10px]' />
                </div>
                <div className="lg:pl-3 pl-2">
                  <p className='font-main font-normal lg:text-[15px] text-[10px] text-[rgba(255,255,255,0.54)]'>Location</p>
                  <p className='font-main font-normal lg:text-[16px] text-[11px] text-white'>Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
            <div className="lg:mt-0 ">
              <div className="flex lg:gap-5 gap-2 items-center lg:justify-center lg:mt-8 mt-5">
                <Link to="https://www.facebook.com/share/1C7bAwyPQz/">
                <FaFacebook className='text-[rgba(255,255,255,0.59)]' />
                </Link>
                <FaTwitter className='text-[rgba(255,255,255,0.59)]' />
                <RiInstagramFill className='text-[rgba(255,255,255,0.59)]' />
              </div>
            </div>
          </div>
          <div onClick={()=>setDown(!down)} className="absolute h-13 w-13 rounded-tr-[30px] rounded-bl-[30px] flex items-center justify-center border-1 border-amber-500 top-[-0px]  right-[0px] lg:hidden">
            {down ? <IoIosArrowUp className='text-amber-500'/>: <IoIosArrowDown className='text-amber-500'/>}
          </div>
         </div>
          
        </Container>
      </div>
    </>
  )
}
export default SlidBar