// import React, { useState } from 'react'
// import Container from './Container'
// import { Link } from 'react-router-dom'
// const Navbar = () => {
//   const [list, setList] = useState("home")
//   return (
//     <div className="overflow-hidden">
//       <Container>
//          <div className="flex">
//           <div className="w-1/3 py-5 pl-10 relative">
//           {list === "home" &&
//           <h1 className='text-white text-[22px] font-bold font-main after:absolute after:w-[40px] after:h-[5px] after:bg-amber-300 after:bottom-3 after:rounded-[5px] after:left-10'>Home</h1>
//           }
//           {list === "about" &&
//           <h1 className='text-white text-[22px] font-bold font-main after:absolute after:w-[50px] after:h-[5px] after:bg-amber-300 after:bottom-3 after:rounded-[5px] after:left-10'>About Me</h1>
//           }
//           {list === "resume" &&
//           <h1 className='text-white text-[22px] font-bold font-main after:absolute after:w-[50px] after:h-[5px] after:bg-amber-300 after:bottom-3 after:rounded-[5px] after:left-10'>Resume </h1>
//           }
//           {list === "portfolio" &&
//           <h1 className='text-white text-[22px] font-bold font-main after:absolute after:w-[50px] after:h-[5px] after:bg-amber-300 after:bottom-3 after:rounded-[5px] after:left-10'>Portfolio </h1>
//           }
//           {list === "contect" &&
//           <h1 className='text-white text-[22px] font-bold font-main after:absolute after:w-[50px] after:h-[5px] after:bg-amber-300 after:bottom-3 after:rounded-[5px] after:left-10'>Contect </h1>
//           }
//           </div>
//           <div className="w-2/3">
//              <div className="flex justify-end z-100">
//             <ul className='flex gap-x-8 bg-[rgba(137,137,137,0.11)] py-6 px-20 rounded-tr-[30px] rounded-bl-[30px] '>
//               <Link to="/"><li onClick={()=>setList("home")} className={` font-semibold font-main ${list === "home" ? "text-yellow-500" : "text-white"}`}>Home</li></Link>
//               <Link to="/about"><li onClick={()=>setList("about")} className={` font-semibold font-main ${list === "about" ? "text-yellow-500" : "text-white"}`}>About</li></Link>
//               <Link to="/resume"><li onClick={()=>setList("resume")} className={` font-semibold font-main ${list === "resume" ? "text-yellow-500" : "text-white"}`}>Resume</li></Link>
//               <Link to="/portfolio"><li onClick={()=>setList("portfolio")} className={` font-semibold font-main ${list === "portfolio" ? "text-yellow-500" : "text-white"}`}>Portfolio</li></Link>
//               <Link to="/contact"><li onClick={()=>setList("contect")} className={` font-semibold font-main ${list === "contect" ? "text-yellow-500" : "text-white"}`}>Contact</li></Link>
//             </ul>
//           </div>
//           </div>
//          </div>
//       </Container>
//     </div>
//   )
// }

// export default Navbar



import React from 'react'
import Container from './Container'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const path = location.pathname
  return (
   <div className="">
     <div className="overflow-hidden ">
      <Container>
        <div className="lg:flex ">
          <div className="lg:w-1/3 w-full lg:py-5 py-3 lg:pl-10 pl-5 relative">
            {path === "/" && (
              <h1 className='text-white text-[18px] lg:text-[22px] font-bold font-main after:absolute lg:after:w-[40px] after:w-[30px] lg:after:h-[5px] after:h-[3px] after:bg-amber-300 after:bottom-3 after:rounded-[5px] lg:after:left-10 after:left-5'>
                Home
              </h1>
            )}
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
          <div className="lg:w-2/3 w-full lg:static fixed bottom-0 left-0 z-50  ">
            <div className="flex lg:justify-end justify-center ">
              <ul className='flex lg:gap-x-8 gap-x-5 bg-[rgba(27,27,27)] lg:bg-[rgba(137,137,137,0.11)] lg:py-6 py-4 lg:px-20 px-[51px] lg:rounded-tr-[30px] lg:rounded-bl-[30px] lg:pb-0 pb-25'>
                <Link to="/"><li className={`font-semibold font-main lg:text-[16px] text-[12px] ${path === "/" ? "text-yellow-500" : "text-white"}`}>Home</li></Link>
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
