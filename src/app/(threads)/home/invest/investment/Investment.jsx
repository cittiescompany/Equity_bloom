'use client'
import { formatCurrency } from "@/lib/utils"
import { useInvestmentStore } from "@/store/Global"
import { Button, Input, useDisclosure } from "@nextui-org/react"
import { useState } from "react"
import PaymentMethodModal from "../components/PaymentMethodModal"
import PaymentModal from "../components/PaymentModal"
import { useSingleGetInvestment } from "@/api/investment"
import { ImSpinner8 } from "react-icons/im"


const Investment = ({id}) => {
    const [noOfShares, setNoOfShares] = useState(null)
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
    const {data,setPaymentAmount,setNoOfShares:putNoOfShares,setSelectedInvestment}=useInvestmentStore()
    const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();

      const {data:investment,isFetching}=useSingleGetInvestment(id)
      console.log(investment);
      

const handleBuyShare =() => {
    setPaymentAmount(noOfShares*investment?.amountPerUnit)
    setSelectedInvestment(investment)
    putNoOfShares(noOfShares)
    onOpen()
}
  return (
    <div className='min-h-screen my-4'>
    <div className='mx-6 py-8'>
    <h1 className='text-2xl my-2'>Invest Now</h1>

    <p className='text-gray-500 mb-2'>To invest now, enter the number of shares you will like to purchase</p>

              <div className='mt-6'>
        <p className="mb-2 ms-2 text-gray-500">
          How many <b>shares</b> do you do you want to buy?
        </p>
        {!investment&&isFetching?<div className='py-2 flex items-center justify-center w-full'><ImSpinner8 className='animate-spin text-indigo-500' size={20} />
                  </div>:<p className="mb-2 ms-2 text-gray-500">One share is {formatCurrency('NGN',investment?.amountPerUnit)}</p>}
        <Input
          size="lg"
          type="text"
          name="unit"
          placeholder={`${investment?.totalShares-investment?.sharesSold}`}
          className="rounded-md"
          onChange={(e)=>setNoOfShares(e.target.value)}
        />

{data?.selectedInvestment&&noOfShares&&<p className="mt-6 ms-2 text-gray-500 italic">You are going to pay a sum of {formatCurrency('NGN',noOfShares*investment?.amountPerUnit)} for the number of selected shares</p>}
      </div>


      <div className=' mt-4'>
        <Button size='lg' isDisabled={!noOfShares} className='text-white bg-indigo-600 hover:bg-indigo-500 w-full rounded-md' onPress={handleBuyShare}>Buy Shares</Button>

    </div>
    </div>

    <PaymentMethodModal onOpenChange={onOpenChange} openPaymentModal={()=>setIsPaymentModalOpen(true)} isOpen={isOpen} onClose={onClose}/>
    <PaymentModal isOpen={isPaymentModalOpen} onClose={()=>setIsPaymentModalOpen(false)}/>
  </div>
  )
}

export default Investment