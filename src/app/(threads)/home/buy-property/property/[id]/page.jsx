import React from 'react'
import InvestmentDetails from '@/app/(threads)/home/invest/investment/Investment.jsx' 

const page = async({params}) => {
    const {id}= await params;
  return (
    <div>
        <InvestmentDetails id={id} />
    </div>
  )
}

export default page