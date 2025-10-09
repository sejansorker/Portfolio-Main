import React from 'react'
import { Outlet } from "react-router-dom";
import SlidBar from '../components/SlidBar';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
const Layout = () => {
    return (
        <div className='bg-black'>
            <Container>
                <div className="flex gap-10">
                   <div className="w-1/3 sticky top-0 h-screen">
                     <SlidBar />
                   </div>
                    <div className=" w-2/3 bg-[rgba(27,27,27,0.95)]   rounded-[30px] mt-5 ">
                       <div className=" ">
                         <Navbar />
                       </div>
                       <div className="">
                         <Outlet />
                       </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Layout