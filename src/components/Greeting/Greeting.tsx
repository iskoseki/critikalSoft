"use client"
import { useDarkMode } from '../../context/DarkModeContext';
import Link from "next/link";
import DownloadButton from "./DownloadBtn";
import Cursor from "./MouseCustom";


export default function Greeting() {


    return (
       <section className="cursor-none">
        { /*Cursor*/}
        <Cursor/>
        { /*Card*/}
  <div className="container mx-auto flex px-2 py-4 sm:px-5 sm:py-24 items-center justify-center flex-col">
    <div className={`shadow-2xl  rounded-3xl p-2 sm:p-6  xl:p-12 text-center lg:w-2/3 w-auto ${true ? 'shadow-slate-700 border-gray-900 text-gray-200 bg-gray-900' : 'shadow-slate-300 border-gray-900 bg-gray-200'} transition-all duration-700 ease-in`}>
      <h1 className=" sm:text-4xl text-3xl m-2 mb-4 font-bold">Bespoke Software Development</h1>
      <p className="  text-sm px-8  mb-8 leading-relaxed">My name&apos;s Leandro and I design, develop and deliver intelligent high-tech bespoke software solutions for Enterprise & Artists around the world. </p>
      <div className="flex justify-around items-center ">
        <button className={`inline-block text-white  border-0 py-2 px-6 focus:outline-none rounded-3xl  text-sm sm:text-lg ${true ? 'bg-gradient-to-r from-yellow-100 to-pink-800 hover:from-pink-800 hover:shadow-2xl hover:to-yellow-100': 'bg-gradient-to-r from-yellow-500 to-pink-700 hover:from-pink-600 hover:shadow-2xl hover:to-yellow-500'} transition-all duration-1000 ease-in`}>
          <Link href="/services">Services</Link>
          </button>
       <DownloadButton/>
     
      </div>
    </div>
  </div>
</section>
    );
}