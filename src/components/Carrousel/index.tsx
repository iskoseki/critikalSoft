"use client"
import React, { useState } from 'react';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    'https://source.unsplash.com/random/800x400',
    'https://source.unsplash.com/random/800x401',
    'https://source.unsplash.com/random/800x402',
    'https://source.unsplash.com/random/800x403',
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-64">
      <img src={images[activeIndex]} alt="Carousel Image" className="w-full h-full object-cover" />
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;