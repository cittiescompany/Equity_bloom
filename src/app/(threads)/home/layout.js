'use client'
import React from "react";
import RequiredAuth from "@/components/core/shared/RequiredAuth";
import Nav from "@/components/core/shared/Nav";
import { Footer } from "@/components/core/Home/AppHero";
import Notifications from "../components/Notifications";
import AdvertContainer from "../components/AdvertContainer";
import { Toaster } from 'react-hot-toast'

const Layout = ({ children }) => {
  return (
    <RequiredAuth>
      <>
      <Nav />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4 pt-6 px-8">
      <div className='hidden md:block bg-white shadow-sm rounded-lg h-screen'>
       <AdvertContainer/>
      </div>
      <div className="md:col-span-2 bg-white rounded-lg">
      {children}  
      </div>    
      <div className='hidden md:block bg-white shadow-sm rounded-lg'>
      <Notifications />
      </div>
      </div>
      <Footer/>
      <Toaster position="top-center" reverseOrder={false} />
      </>
    </RequiredAuth>

  );
};

export default Layout;
