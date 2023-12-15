'use client'
import React from 'react';
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline";

const DownloadButton = () => {
  const handleDownload = () => {
    const pdfUrl = '/Leandro_Bordon_Dev.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'mi_curriculum.pdf';
    link.click();
  };

  return (

     <button onClick={handleDownload} className="inline-block flex items-center justify-center text-gray-700 bg-gray-100 
         py-2 px-6 focus:outline-none hover:bg-gray-200  rounded-3xl transition-all duration-700 ease-in">
        <ArrowDownOnSquareIcon className="w-6 h-6  mr-3"/> 
        <span className="text-sm sm:text-lg font-light" >Check my resume</span> 
        </button>

  );
};

export default DownloadButton;
