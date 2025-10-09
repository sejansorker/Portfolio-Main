import React from 'react'
import Container from './Container'
import Me from "../assets/safi.png"
import { MdLocationPin, MdOutlineEmail } from 'react-icons/md'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { TbCalendar } from 'react-icons/tb'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { Meteors } from "@/components/ui/meteors"
const SlidBar = () => {
  return (
    <>
      <div className="">
        <Container>
          <div className=" h-[685px] w-full relative overflow-hidden pt-10 bg-[rgba(27,27,27,0.92)] text-white my-5 rounded-[30px]">
            
              <div className="h-full  absolute">
                <Meteors />
              </div>
            
            <div className="text-center w-[240px] mx-auto border-b-2 border-[rgba(137,137,137,0.24)] pb-6">
              <div className="bg-[rgba(137,137,137,0.28)] w-[200px] rounded-[30px] mx-auto">
                <img className='w-full' src={Me} alt="" />
              </div>
              <div className="">
                <h2 className='py-4 text-white text-[28px] font-bold font-main'>Sejan Sorker</h2>
                <h2 className='text-white text-[14px]  font-semibold rounded-[10px] mx-auto w-fit font-main px-3 py-1 bg-[rgba(137,137,137,0.12)]'>Frontend Developer</h2>
              </div>
            </div>
            <div className=" mx-auto pt-5">
              <div className="flex items-center justify-center">
                <div className="h-8 w-8 rounded-[5px] border-1 border-[#F8D568] flex items-center justify-center ">
                  <MdOutlineEmail className='text-[#F8D568] ' />
                </div>
                <div className="pl-3">
                  <p className='font-main font-normal text-[12px] text-[rgba(255,255,255,0.54)]'>Email</p>
                  <Link to="https://sejansorker@gmail.com"><p className='font-main font-normal text-[14px] text-white'>sejansorker@gmail.com...</p></Link>
                </div>
              </div>
              <div className="flex items-center pl-[99px] my-5">
                <div className="h-8 w-8 rounded-[5px] border-1 border-[#F8D568] flex items-center justify-center ">
                  <HiOutlineDevicePhoneMobile className='text-[#F8D568] ' />
                </div>
                <div className="pl-3">
                  <p className='font-main font-normal text-[12px] text-[rgba(255,255,255,0.54)]'>Phone</p>
                  <Link to="">
                  <p className='font-main font-normal text-[14px] text-white'>+8801780519010</p>
                  </Link>
                </div>
              </div>
              <div className="flex items-center pl-[99px] ">
                <div className="h-8 w-8 rounded-[5px] border-1 border-[#F8D568] flex items-center justify-center ">
                  <TbCalendar className='text-[#F8D568] ' />
                </div>
                <div className="pl-3">
                  <p className='font-main font-normal text-[12px] text-[rgba(255,255,255,0.54'>Birthday</p>
                  <p className='font-main font-normal text-[14px] text-white'>1 July, 2004</p>
                </div>
              </div>
              <div className="flex items-center pl-[99px] mt-5">
                <div className="h-8 w-8 rounded-[5px] border-1 border-[#F8D568] flex items-center justify-center ">
                  <MdLocationPin className='text-[#F8D568] ' />
                </div>
                <div className="pl-3">
                  <p className='font-main font-normal text-[12px] text-[rgba(255,255,255,0.54'>Location</p>
                  <p className='font-main font-normal text-[14px] text-white'>Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
            <div className=" ">
              <div className="flex gap-5 items-center justify-center mt-8">
                <Link to="https://www.facebook.com/share/1C7bAwyPQz/">
                <FaFacebook className='text-[rgba(255,255,255,0.59)]' />
                </Link>
                <FaTwitter className='text-[rgba(255,255,255,0.59)]' />
                <RiInstagramFill className='text-[rgba(255,255,255,0.59)]' />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default SlidBar