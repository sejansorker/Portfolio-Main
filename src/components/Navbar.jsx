import React from 'react'
import Container from './Container'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const path = location.pathname
  return (
   <div className="">
     <div className="">
      <Container>
        <div className="lg:flex ">
          <div className="lg:w-1/3 w-full lg:py-5 py-3 lg:pl-10 pl-5 relative">
            
            {path === "/about" && (
              <h1 className='text-white text-[18px] lg:text-[22px] font-bold font-main after:absolute lg:after:w-[50px] after:w-[40px] lg:after:h-[5px] after:h-[3px] after:bg-amber-300 after:bottom-3 after:rounded-[5px] lg:after:left-10 after:left-5'>
                About Me
              </h1>
            )}
            {path === "/resume" && (
              <h1 className='text-white text-[18px] lg:text-[22px] font-bold font-main after:absolute lg:after:w-[50px] after:w-[40px] lg:after:h-[5px] after:h-[3px] after:bg-amber-300 after:bottom-3 after:rounded-[5px] lg:after:left-10 after:left-5'>
                Resume
              </h1>
            )}
            {path === "/portfolio" && (
              <h1 className='text-white text-[18px] lg:text-[22px] font-bold font-main after:absolute lg:after:w-[50px] after:w-[40px] lg:after:h-[5px] after:h-[3px] after:bg-amber-300 after:bottom-3 after:rounded-[5px] lg:after:left-10 after:left-5'>
                Portfolio
              </h1>
            )}
            {path === "/contact" && (
              <h1 className='text-white text-[18px] lg:text-[22px] font-bold font-main after:absolute lg:after:w-[50px] after:w-[40px] lg:after:h-[5px] after:h-[3px] after:bg-amber-300 after:bottom-3 after:rounded-[5px] lg:after:left-10 after:left-5'>
                Contact
              </h1>
            )}
          </div>
          <div className="lg:w-2/3 w-full lg:static fixed bottom-0 left-0 right-0 z-50 pb-[env(safe-area-inset-bottom)]">
            <div className="flex lg:justify-end justify-center ">
              <ul className='flex justify-center lg:gap-x-10 gap-x-8 w-full bg-[rgba(27,27,27)] lg:bg-[rgba(137,137,137,0.79)] lg:py-6 py-4 lg:px-20  lg:rounded-tr-[30px] lg:rounded-bl-[30px]'>
                <Link to="/about"><li className={`font-semibold font-main lg:text-[16px] text-[12px] ${path === "/about" ? "text-yellow-500" : "text-white"}`}>About</li></Link>
                <Link to="/resume"><li className={`font-semibold font-main lg:text-[16px] text-[12px] ${path === "/resume" ? "text-yellow-500" : "text-white"}`}>Resume</li></Link>
                <Link to="/portfolio"><li className={`font-semibold font-main lg:text-[16px] text-[12px] ${path === "/portfolio" ? "text-yellow-500" : "text-white"}`}>Portfolio</li></Link>
                <Link to="/contact"><li className={`font-semibold font-main lg:text-[16px] text-[12px] ${path === "/contact" ? "text-yellow-500" : "text-white"}`}>Contact</li></Link>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
   </div>
  )
}
export default Navbar
