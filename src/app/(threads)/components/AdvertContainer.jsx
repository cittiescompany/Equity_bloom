/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper styles
import { Autoplay } from 'swiper/modules'; // Autoplay module for Swiper
import { AnimatePresence, motion } from 'framer-motion';
import { investmentOpportunities } from '@/lib/data';

const AdvertContainer = () => {
  // Example GIF URLs (replace with your actual GIFs)
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % gifs.length);
    }, 60000); // Change every 60 seconds

    return () => clearInterval(interval);
  }, []);

  const gifs = [
    'https://media.giphy.com/media/3o7abAHdYvZdBNnGZq/giphy.gif',
    'https://media.giphy.com/media/3o7TKsQ8gqVlw58mO4/giphy.gif',
    'https://media.giphy.com/media/3o7TKsQ8gqVlw58mO4/giphy.gif',
    'https://media.giphy.com/media/3o7TKsQ8gqVlw58mO4/giphy.gif',
  ];


  return (
    <div className="bg-white shadow-sm rounded-lg h-screen p-6 overflow-y-auto">
      {/* Top Card: Flashy GIF Adverts */}
      <div className="rounded-lg mb-6 overflow-hidden h-[12rem]">
      <AnimatePresence mode="wait">
          <motion.img
            key={gifs[index]} // Unique key to trigger animation
            src={gifs[index]}
            alt="Rotating GIF"
            className="w-full h-full object-cover"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Middle Card: YouTube Video Embed */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Featured Video</h2>
        <div className="h-[12rem]">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>
      </div>

      {/* Bottom Card: Advert Text Carousel */}
      <div className="">
        <h2 className="text-xl font-semibold mb-4">Profitable Investments</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full"
        >
          {investmentOpportunities.map((investment,i)=>(
          <SwiperSlide key={i} className="w-full h-[12rem] rounded-lg overflow-hidden">
          <img
            src={investment.image}
            alt={`Slide ${index + 1}`}
            className="mySwiper-slide w-full h-full object-cover"
          />
        </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AdvertContainer;