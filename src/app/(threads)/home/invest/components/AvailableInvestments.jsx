/* eslint-disable @next/next/no-img-element */
'use client';
import { useGetInvestments } from '@/api/investment';
import { formatCurrency } from '@/lib/utils';
import { Button,} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import ImagePreviewModal from './ImagePreviewModal';
import { ImSpinner8 } from 'react-icons/im';
import { useAuth } from '@/hooks/use-auth';

const AvailableInvestments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedInvestment, setSelectedInvestment] = useState(null);
  const router = useRouter();
  const { data: investments, isFetching } = useGetInvestments();
  const {user}=useAuth()

  const goToOffer = () => {
    router.push('/home/invest/offer');
  };

  const goToInvestment = (event,id) => {
    event.stopPropagation();
    // setGlobalSelectedInvestment(investment);
    router.push(`/home/invest/investment/${id}`);
  };

  const openImageModal = (event,investment, index) => {
    event.stopPropagation();
    setSelectedInvestment(investment);
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const handleNextImage = () => {
    if (selectedImageIndex < selectedInvestment.pictures.length + selectedInvestment.videos.length - 1) {
      setSelectedImageIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousImage = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex((prevIndex) => prevIndex - 1);
    }
  };

  const hasInvested=(investment)=>{
const invested=investment.investors.find(investor=>investor.user._id==user._id)
return !!invested
  }

//   const availableInvestments=()=>{
// const filteredInvestments=investments?.filter(investment=>investment.investors.find(investor=>investor.user._id==user._id))
// return filteredInvestments
//   }

const availableInvestments = () => {
  return investments?.filter(investment => 
    !investment.investors.some(investor => investor.user._id === user._id)
  );
};

  

  const handleViewDetail=(id)=>{
    router.push(`/home/invest/details/${id}`);
  }

  return (
    <div>


      <div className="my-4">
        <h1 className="text-xl mb-2">Investment Opportunities</h1>
        {isFetching?<div className='h-[25rem] flex items-center justify-center w-full'><ImSpinner8 className='animate-spin text-indigo-500' size={30} />
          </div>:
        <div className="space-y-6 max-h-[40rem] overflow-scroll">
          {availableInvestments().length>0?availableInvestments()?.map((investment, i) => (
            <div onClick={()=>handleViewDetail(investment._id)} key={i} className="rounded-lg bg-slate-50 flex items-center gap-6 w-full p-2 cursor-pointer">
              <img
                src={investment.pictures[0]}
                alt=""
                className="w-[8rem] h-[8rem] rounded-lg cursor-pointer"
                onClick={(e) => openImageModal(e,investment, 0)}
              />
              <div className="flex flex-col justify-between gap-6 w-full">
                <div className="flex justify-between w-full">
                  <div>
                    <h2 className="line-clamp-1">{investment.productName}</h2>
                    <p className="text-sm mt-2">
                      <span className="text-green-500">{investment.rate}% {investment.period}</span>{' '}
                      {/* <span className="text-gray-500">{investment.description}</span> */}
                    </p>
                  </div>
                  {investment.status === 'bought' ? (
                    <div className="flex flex-col gap-4">
                      <Button size="sm" className="rounded-full px-4 text-red-500 bg-red-100">
                        Sold Out
                      </Button>
                      <Button onPress={goToOffer} size="sm" className="rounded-full px-4 text-blue-500 bg-blue-100">
                        Buy out
                      </Button>
                    </div>
                  ) : (
                    <Button
                    size='sm'
                    isDisabled={hasInvested(investment)}
                    className="rounded-full text-sm px-4 text-green-500 bg-green-100"
                    onClick={(e) => goToInvestment(e,investment._id)}
                  >
                    {hasInvested(investment) ? 'Invested' : 'Invest Now'}
                  </Button>
                  )}
                </div>
                <div className="flex items-center gap-8">
                  <div>
                    <p>{formatCurrency('NGN', investment.amountPerUnit)}</p>
                    <span className="text-gray-500 text-sm">Per Unit</span>
                  </div>
                  <div>
                    {/* <p>{Math.floor(Math.random() * (200 - 100 + 1)) + 100}</p> */}
                    <p>{investment?.investors?.length}</p>
                    <span className="text-gray-500 text-sm">{investment?.investors?.length>1?'Investors':'Investor'}</span>
                  </div>
                </div>
              </div>
            </div>
          )): <div className='flex justify-center items-center min-h-[30rem] text-gray-400'><p>No investment available</p></div> }
        </div>
        }
      </div>

      {/* Image Modal */}
  <ImagePreviewModal selectedImageIndex={selectedImageIndex} selectedInvestment={selectedInvestment} handleNextImage={handleNextImage} handlePreviousImage={handlePreviousImage} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default AvailableInvestments;