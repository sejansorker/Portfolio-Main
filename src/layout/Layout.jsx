import React from 'react'
import { Outlet } from "react-router-dom";
import SlidBar from '../components/SlidBar';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
const Layout = () => {
    return (
        <div className="bg-black">
          <div className='lg:mx-0 mx-2 lg:pt-0 pt-3 '>
            <Container>
                <div className="lg:flex gap-x-10">
                   <div className="lg:w-1/3 w-full lg:sticky top-0 lg:h-screen lg:mb-0 mb-3">
                     <SlidBar />
                   </div>
                    <div className="mt-3 border-1 border-amber-500 lg:w-2/3 w-full bg-[rgba(27,27,27,0.95)]  lg:rounded-[30px] lg:mt-5 lg:mx-0">
                       <div className="">
                         <Navbar />
                       </div>
                       <div className="">
                         <Outlet />
                       </div>
                    </div>
                </div>
            </Container>
        </div>
        </div>
    )
}

export default Layout