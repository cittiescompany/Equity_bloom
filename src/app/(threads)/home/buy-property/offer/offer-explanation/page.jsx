'use client'
import { formatCurrency } from '@/lib/utils'
import { Button, Checkbox, Input } from '@nextui-org/react'
import React from 'react'
import { IoIosClose, IoMdArrowDropdown } from 'react-icons/io'

const OfferExplanation = () => {
  return (
    <div className='min-h-screen my-4'>
      <div className='mx-6 py-8'>
      <h1 className='text-2xl my-2'>Offer Explanation</h1>

      <p className='text-gray-500 mb-2'>Let&apos;s look at the original unit information and present value of each unit</p>
           <div className='grid grid-cols-2 w-full mb-8 gap-4'>
                <div className='rounded-lg bg-indigo-50 p-3 border border-indigo-600'>
                  <span className='text-gray-6 text-xs'>Initial unit price</span>
                  <p className='text-indigo-600'>{formatCurrency('NGN',5000)}</p>
                </div>
                <div className='rounded-lg bg-indigo-50 p-3 border border-indigo-600'>
                  <span className='text-gray-6 text-xs'>Your avg. buy price</span>
                  <p className='text-indigo-600'>{formatCurrency('NGN',0)}</p>
                </div>
                <div className='rounded-lg bg-indigo-50 p-3 border border-indigo-600'>
                  <span className='text-gray-6 text-xs'>Cashout unit value</span>
                  <p className='text-indigo-600'>{formatCurrency('NGN',5554.79)}</p>
                </div>
                <div className='rounded-lg bg-indigo-50 p-3 border border-indigo-600'>
                  <span className='text-gray-6 text-xs'>Current unit value</span>
                  <p className='text-indigo-600'>{formatCurrency('NGN',5188)}</p>
                </div>
            
              </div>


      <p className='text-gray-500 mb-2'>However an investor wants to <b>sell to you</b>. Here are the details of their offer</p>
           <div className='grid grid-cols-2 w-full mb-8 gap-4'>
                <div className='rounded-lg bg-indigo-50 p-3 border border-indigo-600'>
                  <span className='text-gray-6 text-xs'>Unit to sell</span>
                  <p className='text-indigo-600'>98 units</p>
                </div>
                <div className='rounded-lg bg-indigo-50 p-3 border border-indigo-600'>
                  <span className='text-gray-6 text-xs'>Total value of offer</span>
                  <p className='text-indigo-600'>{formatCurrency('NGN',514500)}</p>
                </div>
                <div className='rounded-lg bg-indigo-50 p-3 border border-indigo-600'>
                  <span className='text-gray-6 text-xs'>Sell price per unit</span>
                  <p className='text-red-500 flex items-center'>{formatCurrency('NGN',5250)} <IoMdArrowDropdown size={20} /></p>
                </div>
                <div className='rounded-lg bg-indigo-50 p-3 border border-indigo-600'>
                <span className='text-gray-500 text-xs'>Annualized ROI</span>
                <p className='text-green-500'>17.81%</p>
                </div>
                <div className='rounded-lg bg-indigo-50 p-3 border border-indigo-600'>
                  <span className='text-gray-6 text-xs'>Offer ends on</span>
                  <p className='text-indigo-600'>4 Mar 2024</p>
                </div>
              </div>


              <div className='rounded-lg bg-indigo-100 p-4 text-indigo-500 my-6 relative'>
              <IoIosClose size={22} className='absolute top-3 right-3' />
                  <h2 className='text-lg font-semibold mb-2'>Summary of this offer</h2>
                  <p className='text-sm'>The listed price for this investment was {formatCurrency("NGN",5000)} per unit, and the cashout value(exit) is {formatCurrency("NGN",5554.79)}.</p>
                  <p className='text-sm'>However the investor wants to <b>sell to you at {formatCurrency("NGN",5200)} per unit</b>.</p>
                </div>
              <div className='rounded-lg bg-red-100 p-4 text-red-500 my-6 relative'>
              <IoIosClose size={22} className='absolute top-3 right-3' />
                  <h2 className='text-lg font-semibold mb-2'>What we think</h2>
                  <p className='text-sm'>It might be a <b>bad offer</b> because the investor is <b>selling higher</b> than the present value of the unit</p>
                  <p className='text-sm'>Which is as <b>of today</b> is <b>{formatCurrency("NGN",5200)}</b> per unit.</p>
                </div>


                <div className='mt-4'>
          <label htmlFor="" className="mb-4 ms-2 text-gray-500">
            Enter the number of the units you want to buy
          </label>
          <Input
            size="lg"
            type="text"
            name="unit"
            placeholder=""
            className="rounded-md"
          />
        </div>

        <div className='rounded-lg bg-indigo-100 p-4 text-indigo-500 my-6 relative'>
                  <p className='text-sm'>I have to buy 1 units for <b>{formatCurrency("NGN",5300)}</b> (@{formatCurrency("NGN",5000)} per unit) from the previous investor.</p>
                </div>
<div className='flex items-center'>
                <Checkbox />
<p className='text-sm text-gray-500'>I hereby confirm my decision above and I accept that this action CANNOT be reversed</p>
</div>

        <div className=' mt-4'>
          <Button size='lg' className='text-white bg-indigo-600 hover:bg-indigo-500 w-full rounded-md'>Buy from Investor</Button>
  
      </div>
      </div>
    </div>
  )
}

export default OfferExplanation