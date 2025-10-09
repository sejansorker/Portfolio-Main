import React from 'react'
import Container from '../components/Container'
import { FaBookOpen } from 'react-icons/fa'
import Html from "../assets/html.svg"
import Css from "../assets/css.svg"
import Boot from "../assets/boot.png"
import Js from "../assets/js.svg"
import Reeact from "../assets/react.svg"
import Tailwind from "../assets/tailwind.png"
import Git from "../assets/github.svg"
import Next from "../assets/next.svg"
const Resume = () => {
  return (
   <>
   <Container>
       <div className="px-10 mt-5">
        <div className="flex gap-5 items-center">
          <div className="h-8 w-8 rounded-[5px] border-1 border-[#F8D568] text-amber-300 flex justify-center items-center">
          <FaBookOpen />
        </div>
       <h2 className='font-main font-bold text-white text-[30px]'>Education</h2>
        </div>
       <div className="pl-2 pt-5 ">
         <div className="">
          <div className="flex items-center gap-x-5 ">
          <div className="h-4 w-4 bg-[rgba(137,137,137,0.24)] rounded-full flex items-center justify-center">
          <div className="h-2 w-2 bg-amber-300 rounded-full"></div>
        </div>
        <h4 className='text-white text-[18px] font-main font-semibold'>Creative It institute</h4>
        </div>
        <div className="pl-9 relative">
          <h5 className='text-yellow-500 text-[16px] font-normal font-main py-2 after:absolute after:w-[2px] after:h-[113px] after:top-[-6px] after:left-[7px] after:bg-[rgba(137,137,137,0.24)]'>2024-2025</h5>
          <p className='text-white text-[14px] font-normal font-main pb-5'>Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
        </div>
         </div>
         <div className="">
          <div className="flex items-center gap-x-5 ">
          <div className="h-4 w-4 bg-[rgba(137,137,137,0.24)] rounded-full flex items-center justify-center">
          <div className="h-2 w-2 bg-amber-300 rounded-full"></div>
        </div>
        <h4 className='text-white text-[18px] font-main font-semibold'>High school</h4>
        </div>
        <div className="pl-9 relative">
          <h5 className='text-yellow-500 text-[16px] font-normal font-main py-2 after:absolute after:w-[2px] after:h-[100px] after:top-[-6px] after:left-[7px] after:bg-[rgba(137,137,137,0.24)]'>2022-2023</h5>
          <p className='text-white text-[14px] font-normal font-main pb-5'>Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
        </div>
         </div>
       </div>
       </div>
       <div className="px-10 mt-5">
        <div className="flex gap-5 items-center">
          <div className="h-8 w-8 rounded-[5px] border-1 border-[#F8D568] text-amber-300 flex justify-center items-center">
          <FaBookOpen />
        </div>
       <h2 className='font-main font-bold text-white text-[30px]'>Experience</h2>
        </div>
        <div className="pl-2 pt-5">
          <div className="flex items-center gap-x-5 ">
          <div className="h-4 w-4 bg-[rgba(137,137,137,0.24)] rounded-full flex items-center justify-center">
          <div className="h-2 w-2 bg-amber-300 rounded-full"></div>
        </div>
        <h4 className='text-white text-[18px] font-main font-semibold'>Creative It institute</h4>
        </div>
        <div className="pl-9 relative">
          <h5 className='text-yellow-500 text-[16px] font-normal font-main py-2 after:absolute after:w-[2px] after:h-[113px] after:top-[-6px] after:left-[7px] after:bg-[rgba(137,137,137,0.24)]'>2024-2025</h5>
          <p className='text-white text-[14px] font-normal font-main pb-5'>Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.</p>
        </div>
         </div>
       </div>
       <div className="mt-15">
        <h2 className='text-center text-[30px] text-white font-bold font-main border-b-4 border-amber-300 w-fit mx-auto'> My Skills</h2>
        <div className="px-10 flex flex-wrap justify-between gap-y-5 py-10">
          <div className="w-[24%] bg-[#708993] rounded-[20px] text-center py-10">
            <img className='h-25 w-25 mx-auto' src={Html} alt="" />
            <h4 className='text-white text-[16px] font-main font-semibold pt-2'>HTML5</h4>
          </div>
          <div className="w-[24%] bg-[#708993] rounded-[20px] text-center py-10">
            <img className='h-25 w-25 mx-auto' src={Css} alt="" />
            <h4 className='text-white text-[16px] font-main font-semibold pt-2'>CSS</h4>
          </div>
          <div className="w-[24%] bg-[#708993] rounded-[20px] text-center py-10">
            <img className='h-25 w-25 mx-auto' src={Boot} alt="" />
            <h4 className='text-white text-[16px] font-main font-semibold pt-2'>BOOTSTRAP5.3</h4>
          </div>
          <div className="w-[24%] bg-[#708993] rounded-[20px] text-center py-10">
            <img className='h-25 w-25 mx-auto' src={Js} alt="" />
            <h4 className='text-white text-[16px] font-main font-semibold pt-2'>JAVASCRIPT</h4>
          </div>
          <div className="w-[24%] bg-[#708993] rounded-[20px] text-center py-10">
            <img className='h-25 w-25 mx-auto' src={Reeact} alt="" />
            <h4 className='text-white text-[16px] font-main font-semibold pt-2'>REACT</h4>
          </div>
          <div className="w-[24%] bg-[#708993] rounded-[20px] text-center py-10">
            <img className='h-25 w-25 mx-auto' src={Tailwind} alt="" />
            <h4 className='text-white text-[16px] font-main font-semibold pt-2'>TAILWIND CSS</h4>
          </div>
          <div className="w-[24%] bg-[#708993] rounded-[20px] text-center py-10">
            <img className='h-25 w-25 mx-auto' src={Git} alt="" />
            <h4 className='text-white text-[16px] font-main font-semibold pt-2'>GIT HUB</h4>
          </div>
          <div className="w-[24%] bg-[#708993] rounded-[20px] text-center py-10">
            <img className='h-25 w-25 mx-auto' src={Next} alt="" />
            <h4 className='text-white text-[16px] font-main font-semibold pt-2'>NEXT JS</h4>
          </div>
         
        </div>
       </div>
   </Container>
   </>
  )
}

export default Resume