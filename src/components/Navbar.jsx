import React, { useEffect } from 'react'
import Logo from './Logo'
import { RiMenu3Line } from "react-icons/ri";

const Navbar = ({isMenuOpen,setisMenuOpen}) => {
    useEffect(()=>{
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
    },[isMenuOpen])
  return (
    <div className='top-0 w-full  z-30 bg[rgba(10,10,10,0.8)] backdrop:blur-lg px-1 border-b border-white/10 shadow-lg'>
        <div className='max-w-5xl mx-auto px-4'>
            <div className='flex justify-between items-center font-mono h-16'>
                <Logo/>

                {!isMenuOpen && <div onClick={()=> setisMenuOpen(prev=>!prev)} className='text-2xl absolute right-7 md:hidden cursor-pointer font-mono'>
                <RiMenu3Line />
                </div>}

                <div className='flex md:flex items-center space-x-8'>
                    <div className='hidden md:flex items-center space-x-8'>
                        <a href="#home" className='text-gray-300 text-lg hover:text-xl hover:text-white transition-all'>Home</a>
                        <a href="#home" className='text-gray-300 text-lg hover:text-xl hover:text-white transition-all'>Hobbies</a>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default Navbar