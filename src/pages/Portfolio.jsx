import React, { useState } from 'react'
import Container from '../components/Container'
import Pro1 from "../assets/project1.jpg"
import Pro2 from "../assets/project2.png"
import Pro3 from "../assets/project3.jpg"
import Pro4 from "../assets/project4.png"
import Pro5 from "../assets/project5.png"
import Pro6 from "../assets/project6.png"
import Pro7 from "../assets/project7.png"
import Pro8 from "../assets/project8.jpg"
import Pro9 from "../assets/project9.png"
import { Link } from 'react-router-dom'
import { SlEye } from 'react-icons/sl'
const Portfolio = () => {
  const [show, setShow] = useState("all")
  return (
    <div className='px-10 my-10'>
        <Container>
          <div className="">
            <ul className='flex gap-x-5'>
              <li onClick={()=>setShow("all")} className={` text-[18px] font-bold cursor-pointer ${show === "all" ? "text-amber-300" : "text-white"}`}>All</li>
              <li onClick={()=>setShow("ecommerce")} className={` text-[18px] font-bold cursor-pointer ${show === "ecommerce" ? "text-amber-300" : "text-white"}`}>Ecommerce</li>
              <li onClick={()=>setShow("web")} className={` text-[18px] font-bold cursor-pointer ${show === "web" ? "text-amber-300" : "text-white"}`}>Web development</li>
            </ul>
          </div>
          <div className="mt-10">
            <div className="">
              {show === "all" && 
              <div className="flex justify-between flex-wrap gap-5 ">
                <div className="w-[31%]  ">
                <div className="overflow-hidden relative group rounded-[15px]">
                  <Link to="https://hektoo.netlify.app/">
                  <img className='w-full ease-in-out scale-100 hover:scale-110 duration-300 rounded-[15px]' src={Pro1} alt="" />
                <div className=" h-12.5 w-12.5 rounded-[10px] opacity-0 group-hover:opacity-100 duration-300 ease-in-out flex items-center justify-center  absolute top-[50%] left-[50%]  transform translate-y-[-50%] translate-x-[-50%] bg-[rgba(137,137,137,0.8)] cursor-pointer">
                  <SlEye className='text-amber-300' />
                </div>
                </Link>
                </div>
                <div className="pl-2 pt-3">
                  <h3 className='text-white text-[16px] font-main font-semibold'>Hekto</h3>
                  <p className='text-[#ffffff93] text-[14px] font-normal font-main pt-1'>Ecommerce Website</p>
                </div>
                </div>
                <div className="w-[31%] ">
                  <div className="overflow-hidden relative group rounded-[15px]">
                  <Link to="https://orebiproject.netlify.app/">
                  <img className='w-full rounded-[15px] ease-in-out scale-100 hover:scale-110 duration-300' src={Pro2} alt="" />
                 
                   <div className=" h-12.5 w-12.5 rounded-[10px] opacity-0 group-hover:opacity-100 duration-300 ease-in-out flex items-center justify-center  absolute top-[50%] left-[50%]  transform translate-y-[-50%] translate-x-[-50%] bg-[rgba(137,137,137,0.8)] cursor-pointer">
                  <SlEye className='text-amber-300' />
                </div>
                 </Link>
                  </div>
                  <div className="pl-2 pt-3">
                  <h3 className='text-white text-[16px] font-main font-semibold'>Orebi</h3>
                  <p className='text-[#ffffff93] text-[14px] font-normal font-main pt-1'>Ecommerce Website</p>
                </div>
                </div>
                <div className="w-[31%] ">
                  <div className="overflow-hidden relative group rounded-[15px]">
                  <Link to="https://taupe-caramel-d4e88a.netlify.app/">
                  <img className='w-full rounded-[15px] ease-in-out scale-100 hover:scale-110 duration-300' src={Pro3} alt="" />
                 
                   <div className=" h-12.5 w-12.5 rounded-[10px] opacity-0 group-hover:opacity-100 duration-300 ease-in-out flex items-center justify-center  absolute top-[50%] left-[50%]  transform translate-y-[-50%] translate-x-[-50%] bg-[rgba(137,137,137,0.8)] cursor-pointer">
                  <SlEye className='text-amber-300' />
                </div>
                 </Link>
                  </div>
                  <div className="pl-2 pt-3">
                  <h3 className='text-white text-[16px] font-main font-semibold'>Exclusive</h3>
                  <p className='text-[#ffffff93] text-[14px] font-normal font-main pt-1'>Ecommerce Website</p>
                </div>
                </div>
                <div className="w-[31%]  ">
                <div className="overflow-hidden relative group rounded-[15px]">
                  <Link to="">
                  <img className='w-full ease-in-out scale-100 hover:scale-110 duration-300 rounded-[15px]' src={Pro4} alt="" />
                <div className=" h-12.5 w-12.5 rounded-[10px] opacity-0 group-hover:opacity-100 duration-300 ease-in-out flex items-center justify-center  absolute top-[50%] left-[50%]  transform translate-y-[-50%] translate-x-[-50%] bg-[rgba(137,137,137,0.8)] cursor-pointer">
                  <SlEye className='text-amber-300' />
                </div>
                </Link>
                </div>
                <div className="pl-2 pt-3">
                  <h3 className='text-white text-[16px] font-main font-semibold'>Hekto</h3>
                  <p className='text-[#ffffff93] text-[14px] font-normal font-main pt-1'>Ecommerce Website</p>
                </div>
                </div>
                <div className="w-[31%] ">
                  <div className="overflow-hidden relative group rounded-[15px]">
                  <Link to="">
                  <img className='w-full rounded-[15px] ease-in-out scale-100 hover:scale-110 duration-300' src={Pro5} alt="" />
                 
                   <div className=" h-12.5 w-12.5 rounded-[10px] opacity-0 group-hover:opacity-100 duration-300 ease-in-out flex items-center justify-center  absolute top-[50%] left-[50%]  transform translate-y-[-50%] translate-x-[-50%] bg-[rgba(137,137,137,0.8)] cursor-pointer">
                  <SlEye className='text-amber-300' />
                </div>
                 </Link>
                  </div>
                  <div className="pl-2 pt-3">
                  <h3 className='text-white text-[16px] font-main font-semibold'>Orebi</h3>
                  <p className='text-[#ffffff93] text-[14px] font-normal font-main pt-1'>Ecommerce Website</p>
                </div>
                </div>
                <div className="w-[31%] ">
                  <div className="overflow-hidden relative group rounded-[15px]">
                  <Link to="">
                  <img className='w-full rounded-[15px] ease-in-out scale-100 hover:scale-110 duration-300' src={Pro6} alt="" />
                 
                   <div className=" h-12.5 w-12.5 rounded-[10px] opacity-0 group-hover:opacity-100 duration-300 ease-in-out flex items-center justify-center  absolute top-[50%] left-[50%]  transform translate-y-[-50%] translate-x-[-50%] bg-[rgba(137,137,137,0.8)] cursor-pointer">
                  <SlEye className='text-amber-300' />
                </div>
                 </Link>
                  </div>
                  <div className="pl-2 pt-3">
                  <h3 className='text-white text-[16px] font-main font-semibold'>Exclusive</h3>
                  <p className='text-[#ffffff93] text-[14px] font-normal font-main pt-1'>Ecommerce Website</p>
                </div>
                </div>
                <div className="w-[31%]  ">
                <div className="overflow-hidden relative group rounded-[15px]">
                  <Link to="">
                  <img className='w-full ease-in-out scale-100 hover:scale-110 duration-300 rounded-[15px]' src={Pro7} alt="" />
                <div className=" h-12.5 w-12.5 rounded-[10px] opacity-0 group-hover:opacity-100 duration-300 ease-in-out flex items-center justify-center  absolute top-[50%] left-[50%]  transform translate-y-[-50%] translate-x-[-50%] bg-[rgba(137,137,137,0.8)] cursor-pointer">
                  <SlEye className='text-amber-300' />
                </div>
                </Link>
                </div>
                <div className="pl-2 pt-3">
                  <h3 className='text-white text-[16px] font-main font-semibold'>Hekto</h3>
                  <p className='text-[#ffffff93] text-[14px] font-normal font-main pt-1'>Ecommerce Website</p>
                </div>
                </div>
                <div className="w-[31%] ">
                  <div className="overflow-hidden relative group rounded-[15px]">
                  <Link to="">
                  <img className='w-full rounded-[15px] ease-in-out scale-100 hover:scale-110 duration-300' src={Pro8} alt="" />
                 
                   <div className=" h-12.5 w-12.5 rounded-[10px] opacity-0 group-hover:opacity-100 duration-300 ease-in-out flex items-center justify-center  absolute top-[50%] left-[50%]  transform translate-y-[-50%] translate-x-[-50%] bg-[rgba(137,137,137,0.8)] cursor-pointer">
                  <SlEye className='text-amber-300' />
                </div>
                 </Link>
                  </div>
                  <div className="pl-2 pt-3">
                  <h3 className='text-white text-[16px] font-main font-semibold'>Orebi</h3>
                  <p className='text-[#ffffff93] text-[14px] font-normal font-main pt-1'>Ecommerce Website</p>
                </div>
                </div>
                <div className="w-[31%] ">
                  <div className="overflow-hidden relative group rounded-[15px]">
                  <Link to="">
                  <img className='w-full rounded-[15px] ease-in-out scale-100 hover:scale-110 duration-300' src={Pro9} alt="" />
                 
                   <div className=" h-12.5 w-12.5 rounded-[10px] opacity-0 group-hover:opacity-100 duration-300 ease-in-out flex items-center justify-center  absolute top-[50%] left-[50%]  transform translate-y-[-50%] translate-x-[-50%] bg-[rgba(137,137,137,0.8)] cursor-pointer">
                  <SlEye className='text-amber-300' />
                </div>
                 </Link>
                  </div>
                  <div className="pl-2 pt-3">
                  <h3 className='text-white text-[16px] font-main font-semibold'>Exclusive</h3>
                  <p className='text-[#ffffff93] text-[14px] font-normal font-main pt-1'>Ecommerce Website</p>
                </div>
                </div>
                
              </div>
              }
            </div>
            <div className="">
              {show === "ecommerce" && 
              <div className="flex justify-between h-[500px]">
                 <div className="w-[31%] ">
                  <img className='w-full rounded-[15px]' src={Pro4} alt="" />
                </div>
                <div className="w-[31%] ">
                  <img className='w-full rounded-[15px]' src={Pro5} alt="" />
                </div>
                <div className="w-[31%] ">
                  <img className='w-full rounded-[15px]' src={Pro6} alt="" />
                </div>
              </div>
              }
            </div>
            <div className="">
              {show === "web" && 
              <div className="flex justify-between h-[500px]">
                <div className="w-[31%] ">
                  <img className='w-full rounded-[15px]' src={Pro7} alt="" />
                </div>
                <div className="w-[31%] ">
                  <img className='w-full rounded-[15px]' src={Pro8} alt="" />
                </div>
                <div className="w-[31%] ">
                  <img className='w-full rounded-[15px]' src={Pro9} alt="" />
                </div>
              </div>
              }
            </div>
          </div>
        </Container>
    </div>
  )
}

export default Portfolio