import { formatCurrency } from '@/lib/utils'
import { useInvestmentStore } from '@/store/Global'
import { Button } from '@nextui-org/react'
import React, { useState } from 'react'
import { IoMdAdd } from 'react-icons/io'
import { LuEyeClosed } from 'react-icons/lu'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

const Balance = () => {
     const [hideAmount, setHideAmount] = useState(false);
      const { data } = useInvestmentStore();
  return (
    <div className="bg-blue-950 rounded-t-3xl h-[15rem] flex flex-col justify-between text-gray-300 p-6">
    <div className="flex justify-between items-center">
      <Button
        size="sm"
        className="font-semibold rounded-full px-4 bg-yellow-800 text-white"
        startContent={<IoMdAdd size={16} />}
      >
        Quick save
      </Button>
      <Button
        size="sm"
        className="font-semibold rounded-full px-4 text-gray-200 bg-blue-800"
        endContent={<MdOutlineArrowRightAlt size={22} />}
      >
        View Savings
      </Button>
    </div>

    <div className="flex justify-between items-end">
      <div>
        <p className="text-lg font-semibold mb-2">Current Balance</p>
        <p className="flex gap-4 items-end">
          <span className="text-2xl font-bold">
            {hideAmount ? '**********' : formatCurrency('NGN', data.wallet_balance)}
          </span>
          <span>
            <LuEyeClosed size={20} className="cursor-pointer" onClick={() => setHideAmount(!hideAmount)} />
          </span>
        </p>
      </div>
      <div className="flex items-center gap-6">
        <Button className="rounded-md bg-gray-200 text-blue-800">Withdraw</Button>
        <Button className="rounded-md bg-transparent text-gray-200 border border-gray-200">Transfer</Button>
      </div>
    </div>
  </div>
  )
}

export default Balance