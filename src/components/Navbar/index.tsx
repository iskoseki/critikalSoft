"use client"
import Image from 'next/image';
import React from 'react';
import {EllipsisHorizontalIcon, XMarkIcon } from '@heroicons/react/24/outline'
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

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

      <div className='fixed w-full top-0 xl:my-6 my-2 z-50 flex justify-center'>
    <nav className='shadow-md bg-gray-200 w-[80%] flex justify-between items-center px-4 py-2 rounded-3xl' >
      
       {/*LOGO HERE*/}
      <div className="flex sm:justify-end items-center cursor-pointer gap-5">
        <img src="/images/critikal.png" alt="" className="h-8 w-18" />
      </div>

      {/*HAMBURGER ICON HERE*/}
      <div onClick={toggleNavbar} className="w-7 h-7cursor-pointer md:hidden  transition-all duration-500 ease-in ">
        {isOpen ? <XMarkIcon/> : <EllipsisHorizontalIcon/>}
      
        
      </div>
        
      {/*LINKS HERE*/}
      <div className="hidden md:block">
        <ul className="md:flex md:py-0 md:ml-8 ">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        </div>
            
    </nav>
    </div>
  
  );
};

export default Navbar;