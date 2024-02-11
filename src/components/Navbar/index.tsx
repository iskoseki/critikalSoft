"use client";

import React, { useEffect } from "react";
import { EllipsisHorizontalIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Logo from "@/components/Logo";
import ThemeSwitch from "../ThemeSwitch";

interface links {
  name: string;
  href: string;
}
const Navbar = ({ navLinks }: { navLinks: links[] }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  enum resolution {
    Desk = 80,
    mobile = 100,
  }
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // Check window width and close the menu if it's open and the screen is larger than mobile
      if (isOpen && window.innerWidth >= resolution.Desk) {
        setIsOpen(false);
      }
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen, resolution.Desk]);

  return (
    <div className=" sticky flex justify-center w-full top-0 xl:my-6 my-2 mt-4  z-50  ">
      <nav
        className={`shadow-md  ${
          isOpen ? "sm:w-full" : "w-3/4"
        } flex justify-between items-center dark:bg-gray-900 bg-gray-100 px-4 py-2 rounded-3xl transition-all duration-600 ease-in`}
      >
        {/*LOGO HERE*/}
        <div className=" flex sm:justify-end items-center cursor-pointer gap-5">
          <Link href={"/"} className="transition-all duration-1000 ease-in-out">
            <Logo />
          </Link>
        </div>

        {/*HAMBURGER ICON HERE*/}
        <div
          onClick={toggleNavbar}
          className="w-6 h-6 cursor-pointer md:hidden  transition-all duration-500 ease-in "
        >
          {isOpen ? <XMarkIcon /> : <EllipsisHorizontalIcon />}
        </div>

        {/*LINKS HERE*/}

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-screen md:w-auto md:p1-0 p1-9 transition-all duration-500 ease-in 
        ${
          isOpen ? "top-14 rounded-lg h-screen bg-gray-300 " : "top-[-490px]"
        } `}
        >
          {navLinks.map((link) => (
            <li key={link.name} className="my-7 md:my-0">
              <Link
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-800  dark:text-gray-500  dark:hover:text-gray-100  transition-all duration-500 ease-in`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeSwitch />
      </nav>
    </div>
  );
};

export default Navbar;
