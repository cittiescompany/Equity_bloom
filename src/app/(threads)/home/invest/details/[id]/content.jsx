/* eslint-disable @next/next/no-img-element */
'use client';
import { useSingleGetInvestment } from '@/api/investment'
import { formatCurrency } from '@/lib/utils'
import { Button, Checkbox, Input } from '@nextui-org/react'
import React from 'react'
import { IoIosClose, IoMdArrowDropdown } from 'react-icons/io'
import InvestmentView from '../../components/InvestmentView';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { ImSpinner8 } from 'react-icons/im';
import { format } from 'date-fns';

const InvestmentDetails =  ({id}) => {
 const router = useRouter();
 const {user}=useAuth()

  
  const {data,isFetching}=useSingleGetInvestment(id)
  console.log(data)

  const goToInvestment = () => {
    router.push(`/home/invest/investment/${id}`);
  };
  
  const hasInvested=(investment)=>{
    console.log(investment);
    
    const invested=investment?.investors.find(investor=>investor.user._id==user._id)
    return !!invested
      }

  const yourInvestment=(investment)=>{
    const invested=investment?.investors.find(investor=>investor.user._id==user._id)
    const { time, fullDate } = formatDate(invested?.date);
    return `You bought ${invested.sharesBought} ${invested.sharesBought>1?'shares':'share'} at ${formatCurrency('NGN',invested?.amountInvested)} on ${fullDate} at ${time}`
      }

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
                  <InvestmentView investment={data} />
                <div className='text-xl md:text-2xl mb-8'>
                <p>{data?.productName}</p>
                </div>

      <h1 className='text-xl md:text-2xl my-2'>Investment Information</h1>
      <p className='text-gray-500 mb-2'>Let&apos;s look at the original unit information and present value of each unit</p>
           <div className='grid grid-cols-1 md:grid-cols-2 w-full mb-8 gap-6'>
                <div className='rounded-lg bg-indigo-50 p-3 border border-indigo-600'>
                  <span className='text-gray-6'>Expected Returns</span>
                  <p className='text-indigo-600'>{data?.rate}% {data?.period}</p>
                </div>
                <div className='rounded-lg bg-indigo-50 p-3 border border-indigo-600'>
                  <span className='text-gray-6'>Current value per unit</span>
                  <p className='text-indigo-600'>{formatCurrency('NGN',data?.amountPerUnit)}</p>
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
         {hasInvested(data)? <div className='rounded-lg bg-indigo-50 p-3 border border-indigo-600'>
                  <p className='text-indigo-600 text-center italic'>{yourInvestment(data)}</p>
                </div>:<Button onPress={goToInvestment} size='lg' className='text-white bg-indigo-600 hover:bg-indigo-500 w-full rounded-md'>Invest Now</Button>}
  
      </div>
      </div>
                  }
    </div>
  )
}

export default InvestmentDetails