'use client'
import { formatCurrency } from "@/lib/utils"
import { usePropertyStore } from "@/store/Global"
import { Button, Input, useDisclosure } from "@nextui-org/react"
import { useState } from "react"
import PaymentMethodModal from "../components/PaymentMethodModal"
import PaymentModal from "../components/PaymentModal"
import { useSingleGetInvestment } from "@/api/property"
import { ImSpinner8 } from "react-icons/im"


const Property = ({id}) => {


      const {data:property,isFetching}=useSingleGetInvestment(id)
      console.log(property);
      


  return (
    <div className='min-h-screen my-4'>
    <div className='mx-6 py-8'>
    <h1 className='text-2xl my-2'>Invest Now</h1>

    <p className='text-gray-500 mb-2'>To invest now, enter the number of shares you will like to purchase</p>

              <div className='mt-6'>
        <p className="mb-2 ms-2 text-gray-500">
          How many <b>shares</b> do you do you want to buy?
        </p>
        {!property&&isFetching?<div className='py-2 flex items-center justify-center w-full'><ImSpinner8 className='animate-spin text-indigo-500' size={20} />
                  </div>:<p className="mb-2 ms-2 text-gray-500">One share is {formatCurrency('NGN',property?.amountPerUnit)}</p>}
        <Input
          size="lg"
          type="text"
          name="unit"
          placeholder={`${property?.totalShares-property?.sharesSold}`}
          className="rounded-md"
          onChange={(e)=>setNoOfShares(e.target.value)}
        />

{data?.selectedInvestment&&noOfShares&&<p className="mt-6 ms-2 text-gray-500 italic">You are going to pay a sum of {formatCurrency('NGN',noOfShares*property?.amountPerUnit)} for the number of selected shares</p>}
      </div>


      <div className=' mt-4'>
        <Button size='lg' isDisabled={!noOfShares} className='text-white bg-indigo-600 hover:bg-indigo-500 w-full rounded-md' onPress={handleBuyProperty}>Buy this property</Button>

    </div>
    </div>
  </div>
  )
}

export default Property