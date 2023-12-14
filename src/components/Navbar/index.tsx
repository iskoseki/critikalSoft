"use client"
import Image from 'next/image';
import React from 'react';
import {EllipsisHorizontalIcon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
enum resolution {
  Desk = 80,
  mobile = 100
}
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Services', href: '/services' },
  ] 

  return (

      <div className='fixed w-full top-0 xl:my-6 my-2 z-50 flex justify-center '>
    <nav className={`shadow-md bg-gray-200 ${isOpen ? 'sm:w-full' : 'w-3/4' }  flex justify-between items-center px-4 py-2 rounded-3xl transition-all duration-500 ease-in`} >
      
       {/*LOGO HERE*/}
      <div className="flex sm:justify-end items-center cursor-pointer gap-5">
        <img src="/images/critikal.png" alt="" className="h-8 w-18" />
      </div>

      {/*HAMBURGER ICON HERE*/}
      <div onClick={toggleNavbar} className="w-7 h-7cursor-pointer md:hidden  transition-all duration-500 ease-in ">
        {isOpen ? <XMarkIcon/> : <EllipsisHorizontalIcon/>}
      
        
      </div>
        
      {/*LINKS HERE*/}
      
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static
  md:z-auto z-[-1] left-0 w-screen md:w-auto md:p1-0 p1-9 transition-all duration-500 ease-in ${isOpen ? 'top-14 rounded-lg h-screen bg-gray-300 ' : 'top-[-490px]'} `}>
          {navLinks.map((link) => (
            <li key={link.name} className='my-7 md:my-0'>
              <a
                href={link.href}
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      
            
    </nav>
    </div>
  
  );
};

export default Navbar;