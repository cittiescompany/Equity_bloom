'use client'
import { useInvestmentStore } from '@/store/Global';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React, { useState } from 'react'
import { BiTransfer } from "react-icons/bi";
import { CiWallet } from 'react-icons/ci';

const PaymentMethodModal = ({ onOpenChange, isOpen, onClose,openPaymentModal}) => {
    const [selectedMethod, setSelectedMethod] = useState({})
    const {setPaymentMethod:getPaymentMethod}=useInvestmentStore()

    const paymentMethods=[
        {id: 1, name: 'Bank Transfer',value:'transfer',icon:<BiTransfer size={25} />},
        {id: 2, name: 'Wallet',value:'wallet',icon:<CiWallet size={25} />},
    ]

    const handleConfirm=()=>{
        getPaymentMethod(selectedMethod.value)
        openPaymentModal()
        onClose()
    }
  return (
    <Modal placement="center" size="xl" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader>
          <h2 className="text-xl font-bold text-center w-full">Select your payment Method</h2>
        </ModalHeader>
        <ModalBody>
            <div className='space-y-5'>
                {paymentMethods.map(paymentMethod =>(
                <div onClick={()=>setSelectedMethod(paymentMethod)} key={paymentMethod.id} className={`${selectedMethod.id===paymentMethod.id&&'bg-slate-200'} flex items-center gap-2 rounded-lg p-4 border text-lg cursor-pointer hover:bg-slate-100`}>
                {paymentMethod.icon}
                    <p>{paymentMethod.name}</p>
                </div>
                ))}
            </div>
        </ModalBody>
        <ModalFooter className="flex gap-4 justify-end">
          <Button
            color="danger"
            variant="light"
            onPress={onClose}
            className="rounded-md"
          >
            Close
          </Button>
          <Button color="primary" onPress={handleConfirm} className="rounded-md">
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default PaymentMethodModal