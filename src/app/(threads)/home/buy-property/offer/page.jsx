'use client'
import { formatCurrency } from '@/lib/utils'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

const Offers = () => {
  const router = useRouter()
  const goToDetails = ()=>{
    router.push('/home/invest/offer/offer-explanation')
  }
    
  return (
    <div className='min-h-screen my-4'>
      <div className='mx-6 py-8'>
      <Button size='sm' className='font-semibold rounded-full px-4 text-gray-200 bg-blue-800 uppercase'>Buy from</Button>
      <h1 className='text-2xl mt-2'>Investors who wants to sell</h1>
      <p className='text-gray-500'>Here are the offers available from investors who want to seell to you. Please review them carefully</p>
      <hr className='my-6' />
      <div className='space-y-6'>
        <div onClick={goToDetails} className='cursor-pointer rounded-lg bg-slate-50 flex items-center justify-between w-full p-3'>
          <div className='flex flex-col items-center'>
            <p>99</p>
            <span className='text-gray-500 text-xs'>Unit</span>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-red-500 flex items-center '>{formatCurrency('NGN',5250)} <IoMdArrowDropdown size={20} />
            </p>
            <span className='text-gray-500 text-xs'>Sell rate (14 days left)</span>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-green-500 flex items-center'>17.81% <IoMdArrowDropup size={20} />
            </p>
            <span className='text-gray-500 text-xs'>Annualized ROI</span>
          </div>
        </div>
        <div onClick={goToDetails} className='cursor-pointer rounded-lg bg-slate-50 flex items-center justify-between w-full p-3'>
          <div className='flex flex-col items-center'>
            <p>99</p>
            <span className='text-gray-500 text-xs'>Unit</span>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-red-500 flex items-center'>{formatCurrency('NGN',5250)} <IoMdArrowDropdown size={20} /></p>
            <span className='text-gray-500 text-xs'>Sell rate (14 days left)</span>
          </div>
          <div className='flex flex-col items-center'>
            <p className='text-green-500 flex items-center'>17.81% <IoMdArrowDropup size={20} /></p>
            <span className='text-gray-500 text-xs'>Annualized ROI</span>
          </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Offers