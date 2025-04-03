/* eslint-disable @next/next/no-img-element */
'use client';
import { useSingleGetInvestment } from '@/api/investment'
import { formatCurrency } from '@/lib/utils'
import { Button, Checkbox, Input, useDisclosure } from '@nextui-org/react'
import React, { useState } from 'react'
import { IoIosClose, IoMdArrowDropdown } from 'react-icons/io'
import PropertyView from '../../components/PropertyView';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { ImSpinner8 } from 'react-icons/im';
import { format } from 'date-fns';
import { useGetSingleProperty } from '@/api/property';
import PaymentMethodModal from '../../components/PaymentMethodModal';
import PaymentModal from '../../components/PaymentModal';
import { usePropertyStore } from '@/store/Global';

const PropertyDetails =  ({id}) => {
 const router = useRouter();
 const {user}=useAuth()
     const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
     const {setPaymentAmount,setSelectedProperty}=usePropertyStore()
     const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();


  
  const {data,isFetching}=useGetSingleProperty(id)
  console.log(data)


  const handleBuyProperty =() => {
    setPaymentAmount(data?.amount)
    setSelectedProperty(data)
    onOpen()
}
  
  // const hasInvested=(investment)=>{
  //   console.log(investment);
    
  //   const invested=investment?.investors.find(investor=>investor.user._id==user._id)
  //   return !!invested
  //     }

  // const yourProperty=(property)=>{
  //   const invested=property?.buyer._id==user._id
  //   if(!invested)return null
  //   const { time, fullDate } = formatDate(invested?.date);
  //   return `You bought ${invested.sharesBought} ${invested.sharesBought>1?'shares':'share'} at ${formatCurrency('NGN',invested?.amountInvested)} on ${fullDate} at ${time}`
  //     }

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return {
          time: format(date, 'hh:mm a'),
          fullDate: format(date, 'MMM d, yyyy')
        };
      };

  return (
    <div className='my-4'>
        {isFetching?<div className='min-h-[25rem] flex items-center justify-center w-full'><ImSpinner8 className='animate-spin text-indigo-500' size={30} />
                  </div>:
      <div className='mx-6 py-8'>
                  <PropertyView property={data} />
                <div className='mb-8'>
                <p className='text-xl md:text-2xl'>{data?.productName}</p>
                <p>{data?.description}</p>
                </div>

           <div className='grid grid-cols-1 md:grid-cols-2 w-full mb-8 gap-6'>
                <div className='rounded-lg bg-indigo-50 p-3 border border-indigo-600'>
                  <span className='text-gray-6'>Location</span>
                  <p className='text-indigo-600'>{data?.location}</p>
                </div>
                <div className='rounded-lg bg-indigo-50 p-3 border border-indigo-600'>
                  <span className='text-gray-6'>Amount</span>
                  <p className='text-indigo-600'>{formatCurrency('NGN',data?.amount)}</p>
                </div>
                {/* <div className='rounded-lg bg-indigo-50 p-3 border border-indigo-600'>
                  <span className='text-gray-6 text-xs'>Cashout unit value</span>
                  <p className='text-indigo-600'>{formatCurrency('NGN',5554.79)}</p>
                </div>
                <div className='rounded-lg bg-indigo-50 p-3 border border-indigo-600'>
                  <span className='text-gray-6 text-xs'>Current unit value</span>
                  <p className='text-indigo-600'>{formatCurrency('NGN',5188)}</p>
                </div> */}
            
              </div>


        <div className=' mt-4'>
         {/* {data.sold? <div className='rounded-lg bg-indigo-50 p-3 border border-indigo-600'>
                  <p className='text-indigo-600 text-center italic'>{yourProperty(data)}</p>
                </div>:<Button onPress={goToInvestment} size='lg' className='text-white bg-indigo-600 hover:bg-indigo-500 w-full rounded-md'>Buy Property</Button>} */}
         {!data.sold&&<Button onPress={handleBuyProperty} size='lg' className='text-white bg-indigo-600 hover:bg-indigo-500 w-full rounded-md'>Buy Property</Button>}
  
      </div>
      </div>
                  }
                      <PaymentMethodModal onOpenChange={onOpenChange} openPaymentModal={()=>setIsPaymentModalOpen(true)} isOpen={isOpen} onClose={onClose}/>
                      <PaymentModal isOpen={isPaymentModalOpen} onClose={()=>setIsPaymentModalOpen(false)}/>
    </div>
  )
}

export default PropertyDetails