'use client'
import { formatCurrency } from '@/lib/utils';
import { useInvestmentStore } from '@/store/Global';
import { Button, Modal, ModalBody, ModalContent, ModalFooter } from '@nextui-org/react'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { ImSpinner8 } from 'react-icons/im';
import { IoCheckmark, IoCopyOutline } from 'react-icons/io5';
import { PiSpinnerThin } from "react-icons/pi";


const PaymentModal = ({ isOpen, onClose,amount,service}) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [isVerifying, setIsVerifying] = useState(false)
    const [isCopied, setIsCopied] = useState(false);
    // const {data,setWalletBanace}=useInvestmentStore()


    // useEffect(() => {
    //     if (!isOpen || !data?.paymentMethod || data.paymentAmount === undefined) return; // Prevent running with missing values
    
    //     setLoading(true); // Ensure loading starts when modal opens
    
    //     const timer = setTimeout(() => {
    //         if (data.paymentMethod === 'wallet') {
    //             if (data.wallet_balance >= data.paymentAmount) {  // Ensure sufficient balance
    //                 const newAmount = data.wallet_balance - data.paymentAmount;
    //                 setWalletBanace(newAmount);
    //                 onClose();
    //                 router.push('/home/invest');
    //             } else {
    //                 console.error("Insufficient balance!");  // Handle insufficient balance properly
    //             }
    //         }
    //         setLoading(false); // Only stop loading after processing
    //     }, 6000);
    
    //     return () => clearTimeout(timer); // Clean up timeout on unmount
    // }, [isOpen, data]); // Depend on isOpen and data to restart logic when modal opens
    


 const copyToClipBoard = (account_number) => {
    navigator.clipboard
      .writeText(account_number)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1000);
      })
      .catch((err) => console.log('Fail to copy text:', err));
  };

    const confirmPayment=() => {
        setIsVerifying(true)
        setTimeout(()=>{
            setIsVerifying(false)
                onClose()
                // router.push('/home/invest')
        }, 2000)
    }
  return (
    <Modal placement="center" size="xl" isOpen={isOpen} onOpenChange={onClose}>
      <ModalContent>
        <ModalBody>
        {loading? <div className='h-[15rem] flex items-center justify-center'><ImSpinner8 size={40} color='blue' className='animate-spin' />
            </div>:
            <div className='relative'>
            {isVerifying &&
               <div className='absolute inset-0 z-99 bg-white/80 flex items-center justify-center'><PiSpinnerThin size={40} className='animate-spin' /></div>
              
            }

{/* Payment Information */}
<div className="mt-4">
  <h3 className="text-lg font-medium text-gray-700">Transfer to</h3>
  <div className="mt-2 bg-gray-100 p-4 rounded-lg">
    <div className="flex justify-between gap-6 items-center mb-2">
      <span className="text-sm text-gray-500">Account Number </span>
      <span className="font-semibold text-gray-900 flex items-center gap-2">
        0216662574
          {isCopied ? (
                    <IoCheckmark color="gray" size={18} className='cursor-pointer' />
                  ) : (
                    <IoCopyOutline color="gray" onClick={()=>copyToClipBoard('0216662574')} size={18} className='cursor-pointer' />
                  )}
      </span>
    </div>
    <div className="flex justify-between gap-6 items-center">
      <span className="text-sm text-gray-500">Bank Name </span>
      <span className="font-semibold text-gray-900">
        GT Bank
      </span>
    </div>
    <div className="flex justify-between gap-6 items-center">
      <span className="text-sm text-gray-500">Account Name </span>
      <span className="font-semibold text-gray-900">
        Stephen Oluwagbemiga
      </span>
    </div>
  </div>
</div>

   <div className="mt-4">
  {/* <h3 className="text-lg font-medium text-gray-700">service</h3> */}
  <div className=" bg-gray-50 p-4 rounded-lg space-y-2">
    <div className="flex justify-between gap-6 items-center">
      <span className="text-sm text-gray-500">Service</span>
      <span className="text-sm text-gray-800 line-clamp-1">
        {service}
      </span>
    </div>
      <div className="flex justify-between gap-6 items-center">
      <span className="text-sm text-gray-500">Amount </span>
      <span className="font-medium text-gray-800 line-clamp-1">
        {formatCurrency('NGN',amount)}
      </span>
    </div>
  </div>
</div>

{/* Instructions */}
<div className="mt-6 text-sm text-gray-700">
  <p>
    If you encounter any issues, contact our support team for
    assistance.
  </p>
</div>

<Button color="primary" onPress={confirmPayment} className="rounded-md w-full my-4">
            I have paid
          </Button>
</div>
    }
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default PaymentModal