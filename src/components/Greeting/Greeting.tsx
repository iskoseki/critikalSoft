'use client'
import React, {useState, useEffect} from "react"

import Link from "next/link";
import DownloadButton from "./DownloadBtn";
import {motion} from 'framer-motion'

export default function Greeting() {

  const [mousePosition, setMousePosition] = useState({x: 0, y: 0})

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.pageX,
        y: event.pageY
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  },[])

  let variants = {
    default: {
      x: mousePosition.x  ,
      y: mousePosition.y
    }
  }
    return (
       <section className=" ">
         <motion.div variants={variants} animate="default"  className="cursor z-50"></motion.div>
  <div className="container mx-auto flex px-2 py-4 sm:px-5 sm:py-24 items-center justify-center flex-col">
    <div className="shadow-2xl shadow-slate-300 border-gray-900 bg-gray-200 rounded-3xl p-2 sm:p-6  xl:p-12 text-center lg:w-2/3 w-auto transition-all duration-700 ease-in">
      <h1 className=" sm:text-4xl text-3xl m-2 mb-4 font-bold text-gray-900">Bespoke Software Development</h1>
      <p className="  text-sm px-8  mb-8 leading-relaxed">My name&apos;s Leandro and I design, develop and deliver intelligent high-tech bespoke software solutions for Enterprise & Artists around the world. </p>
      <div className="flex justify-around items-center ">
        <button className="
        bg-gradient-to-r from-yellow-500 to-pink-700  hover:from-pink-600 hover:shadow-2xl hover:to-yellow-500 inline-block text-white  border-0 py-2 px-6 focus:outline-none rounded-3xl  text-sm sm:text-lg transition-all duration-1000 ease-in"><Link href="/services">Services</Link></button>
    
       <DownloadButton/>
     
      </div>
    </div>
  </div>
</section>
    );
}