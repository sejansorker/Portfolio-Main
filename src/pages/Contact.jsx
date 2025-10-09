import React from 'react'
import Container from '../components/Container'
import { MdOutlineEmail } from 'react-icons/md'
import { TbBrandLinkedin } from 'react-icons/tb'
import { FaFacebook } from 'react-icons/fa'
import { Globe } from "@/components/ui/globe"
const Contact = () => {
  return (
    <div className='p-10'>
        <Container>
      <div className="relative h-[600px] w-full">
          <Globe />
        </div>
        <div className="">
          <h2 className='text-center text-white pt-10 text-[30px] font-bold font-main border-b-5 border-amber-300 w-fit mx-auto pb-2'>Contact Me</h2>
          <div className="py-10 flex gap-5 flex-wrap justify-center">
           <div className="flex items-center gap-x-2 py-2.5 px-5 cursor-pointer bg-[#708993] rounded-[10px] w-fit">
            <MdOutlineEmail className='text-amber-300  font-bold font-main text-[19px]' />
          <button className='text-white font-bold font-main text-[16px] cursor-pointer'> sejansorker@gmail.com</button>
           </div>
           <div className="flex items-center gap-x-2 py-2.5 px-8 cursor-pointer bg-[#708993] rounded-[10px] w-fit">
            <TbBrandLinkedin className='text-amber-300  font-bold font-main text-[19px]' />
          <button className='text-white font-bold font-main text-[16px] cursor-pointer'> sejan sorker</button>
           </div>
           <div className="flex items-center gap-x-2 py-2.5 px-8 cursor-pointer bg-[#708993] rounded-[10px] w-fit">
            <FaFacebook className='text-amber-300  font-bold font-main text-[19px]' />
          <button className='text-white font-bold font-main text-[16px] cursor-pointer'> Sejan Sorker</button>
           </div>
          </div>
        </div>
        </Container>
    </div>
  )
}

export default Contact