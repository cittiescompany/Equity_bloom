'use client'
import React, { useEffect, useRef, useState } from "react";
import RequiredNoAuth from "@/components/core/shared/RequiredNoAuth";
import Link from "next/link";
import Carousel from "../components/AuthCarousel";

const Layout = ({ children }) => {
  const textArray = ["Employees", "Workforce", "Merchants", "Businesses"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const swiperRef = useRef(null); // Reference to Swiper instance
  const intervalDelay = 5000; 

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false); // Reset text animation
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length); // Only update state here
        setAnimate(true); // Restart text animation
  
        // Call slideTo *outside* of state update
        if (swiperRef.current) {
          swiperRef.current.slideTo((currentIndex + 1) % textArray.length);
        }
        
      }, 50);
    }, intervalDelay);
  
    return () => clearInterval(interval); // Cleanup on unmount
  }, [textArray.length, currentIndex]); // Add currentIndex to dependencies
  return <RequiredNoAuth>
       <div
        className="flex flex-col md:flex-row-reverse w-full min-h-screen">
        <div className="md:w-1/2">
          <div
            className="pattern-4 relative flex h-full flex-col overflow-hidden rounded-b-2xl md:rounded-br-none md:rounded-l-2xl bg-blue-800 text-white py-12 px-8 md:p-0">
            {/* <Link href="/" className="mb-10 flex items-center text-[1.6rem] md:mb-16">
              <img src="/images/ccbs.png" width='80' alt="Logo here"/>
            </Link> */}
            <Carousel swiperRef={swiperRef} intervalDelay={intervalDelay} />
            <div>

            </div>
            <div className="hidden absolute inset-0 z-[99] md:flex items-center justify-center w-full">
            <p className="text-2xl text-center !leading-snug text-slate-300 md:text-[2.9rem] font-extrabold">
             Africana Cross Border Management
            </p>
            </div>
            <p className="md:hidden text-2xl text-center !leading-snug text-slate-300 md:text-[2.9rem] font-extrabold">
             Africana Cross Border Management
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto text-xl">      
    {children}
        </div>
      </div>
    </RequiredNoAuth>;
};

export default Layout;
