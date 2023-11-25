'use client'
import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const images = ['/villa1-1360.jpeg', '/villa2-1360.jpeg', '/villa3-1360.jpeg', '/villa4-1360.jpeg', '/villa5.jpeg', '/pool.jpeg']; 

  const settings = {
    dots: true,
    className: "",
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true, 
    autoplay: true,
    autoplaySpeed: 3000,  // Adjust the autoplay speed as needed (in milliseconds)
  };
  
  return (
    <div className="">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className=""> {/* Adjust aspect ratio as needed */}
            <Image 
              src={`${image}`}
              alt={`Image ${index + 1}`}
              className="w-full h-full rounded-lg"
              loading="lazy"
              width={2000}
              height={1000}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
