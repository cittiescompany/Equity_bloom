/* eslint-disable @next/next/no-img-element */
'use client';
import { useGetInvestments, useGetInvestorInvestments } from '@/api/investment';
import { formatCurrency } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import ImagePreviewModal from './ImagePreviewModal';
import { ImSpinner8 } from 'react-icons/im';

const MyInvestments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedInvestment, setSelectedInvestment] = useState(null);
  const router = useRouter();
  const { data: investments, isFetching } = useGetInvestorInvestments();

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



  

  const handleViewDetail=(id)=>{
    router.push(`/home/invest/details/${id}`);
  }

  return (
    <div>


      <div className="my-4">
        <h1 className="text-xl mb-2">My Investments</h1>
        {isFetching?<div className='h-[25rem] flex items-center justify-center w-full'><ImSpinner8 className='animate-spin text-indigo-500' size={30} />
          </div>:
        <div className="space-y-6 max-h-[40rem] overflow-scroll">
          {investments.length>0?investments?.map((investment, i) => (
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

export default MyInvestments;