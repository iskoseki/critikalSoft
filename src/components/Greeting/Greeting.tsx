import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline";
export default function Greeting() {
    return (
       <section className=" ">
  <div className="container mx-auto flex px-2 py-0 sm:px-5 sm:py-24 items-center justify-center flex-col">
    <div className="shadow-2xl shadow-slate-300 border-gray-900 bg-gray-200 rounded-3xl p-2 md:p-6  xl:p-12 text-center lg:w-2/3 w-auto transition-all duration-700 ease-in">
      <h1 className=" sm:text-4xl text-2xl m-2 mb-4 font-bold text-gray-900">Bespoke Software Development</h1>
      <p className="  text-sm px-8  mb-8 leading-relaxed">My name&apos;s Leandro and I design, develop and deliver intelligent high-tech bespoke software solutions for Enterprise & Artists around the world. </p>
      <div className="flex justify-around space-x-2">
        <button className="
        bg-gradient-to-r from-yellow-500 to-pink-700  hover:from-pink-600 hover:shadow-2xl hover:to-yellow-500 inline-block text-white  border-0 py-2 px-6 focus:outline-none rounded-3xl  text-sm sm:text-lg transition-all duration-1000 ease-in">Services</button>
    
        <button className="inline-block flex items-center justify-center text-gray-700 bg-gray-100 
         py-2 px-6 focus:outline-none hover:bg-gray-200  rounded-3xl transition-all duration-700 ease-in">
        <ArrowDownOnSquareIcon className="w-6 h-6  mr-3"/> 
        <span className="text-sm sm:text-lg font-light">Check my resume</span> 
        </button>
     
      </div>
    </div>
  </div>
</section>
    );
}