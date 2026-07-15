// import React from 'react'
// import Container from '../components/Container'
// import { MdOutlineEmail } from 'react-icons/md'
// import { TbBrandLinkedin } from 'react-icons/tb'
// import { FaFacebook } from 'react-icons/fa'
// import { Globe } from "@/components/ui/globe"
// import { CiLocationOn } from "react-icons/ci";
// import { Link } from 'react-router-dom'
// const Contact = () => {
//   return (
//     <div className='lg:p-10 p-5'>
//         <Container>
//       <div className="relative lg:h-[600px] h-[350px] w-full">
//           <Globe />
//         </div>
//         <Link to="https://maps.app.goo.gl/3VKh5xjs32MrV2eg6">
//         <div className="flex mx-auto items-center gap-x-2 py-2.5 px-5 cursor-pointer bg-[#708993] rounded-[10px] w-fit">
//          <CiLocationOn className='text-amber-300 font-bold font-main lg:text-[20px] text-[16px]' />
//           <p className='text-white lg:text-[16px] text-[14px]'>Dhanmondi,Dhaka-1205,Bangladesh</p>
//         </div>
//         </Link>
//         <div className="">
//           <h2 className='text-center text-white lg:pt-10 pt-5 text-[22px] lg:text-[30px] font-bold font-main lg:border-b-5 border-b-3 border-amber-300 w-fit mx-auto pb-2'>Contact Me</h2>
//           <div className="lg:py-10 py-7 lg:mb-0 mb-3 flex gap-5 flex-wrap justify-center">
//            <div className="flex items-center gap-x-2 py-2.5 px-5 cursor-pointer bg-[#708993] rounded-[10px] w-fit">
//             <MdOutlineEmail className='text-amber-300  font-bold font-main lg:text-[19px] text-[15px]' />
//           <button className='text-white font-bold font-main lg:text-[16px] text-[14px] cursor-pointer'> sejansorker@gmail.com</button>
//            </div>
//            <Link to={"https://www.linkedin.com/in/sejansorker" }  target="_blank">
//             <div className="flex items-center gap-x-2 py-2.5 px-4 lg:px-8 cursor-pointer bg-[#708993] rounded-[10px] w-fit">
//             <TbBrandLinkedin className='text-amber-300  font-bold font-main lg:text-[19px] text-[15px]' />
//           <button className='text-white font-bold font-main lg:text-[16px] text-[14px] cursor-pointer'> sejan sorker</button>
//            </div>
//            </Link>
//            <Link to={"https://www.facebook.com/share/1BYgFJFfkA/"} target='_blank'>
//            <div className="flex items-center gap-x-2 py-2.5 px-4 lg:px-8 cursor-pointer bg-[#708993] rounded-[10px] w-fit">
//             <FaFacebook className='text-amber-300  font-bold font-main lg:text-[19px] text-[15px]' />
//           <button className='text-white font-bold font-main lg:text-[16px] text-[14px] cursor-pointer'> Sejan Sorker</button>
//            </div>
//            </Link>
//           </div>
//         </div>
//         </Container>
//     </div>
//   )
// }
// export default Contact





import React, { useState } from 'react'
import Container from '../components/Container'
import { HiOutlineUser, HiOutlineMail } from 'react-icons/hi'
import { HiOutlineDocumentText, HiOutlinePencil } from 'react-icons/hi2'
import { MdOutlinePhone, MdOutlineAccessTime } from 'react-icons/md'
import { CiLocationOn } from 'react-icons/ci'
import { TbBrandLinkedin } from 'react-icons/tb'
import { FaFacebook } from 'react-icons/fa'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { Globe } from '@/components/ui/globe'



const Contact = () => {

  return (
    <>
      <div className="flex lg:px-10 px-5 my-10">
        <div className="w-2/5">
          <div className="">
            <h5 className='lg:text-[16px] text-amber-300 lg:pb-3 font-main font-normal'>LET'S CONNECT</h5>
            <h3 className='lg:text-[16px] text-amber-300 lg:pb-3 font-main font-normal'>Get In Touch<span className='text-amber-300'>.</span></h3>
            <p>Have a project in mind or want to work
              together? Feel free to send me a message.
              I'll get back to you as soon as possible!</p>
          </div>
        </div>
        <div className="w-2/5"></div>
      </div>
    </>
  )
}

export default Contact