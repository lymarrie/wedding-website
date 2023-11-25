'use client'
import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const images = ['/villa1-1360.jpeg', '/villa2-1360.jpeg', '/villa3-1360.jpeg', '/villa4-1360.jpeg', '/villa5.jpeg', '/pool.jpeg']; 
  
  return (
    <>
      <div className="flex flex-col space-y-12">
        {/* Render each image individually for mobile view */}
        {images.map((image, index) => (
          <div key={index} className="">
            <Image
              src={`${image}`}
              alt={`Image ${index + 1}`}
              className="rounded-lg shadow-lg"
              loading="lazy"
              width={2000}
              height={1000}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageCarousel;