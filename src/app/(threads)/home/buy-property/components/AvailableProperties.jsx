/* eslint-disable @next/next/no-img-element */
'use client';
import { formatCurrency } from '@/lib/utils';
import { Button, Chip,} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import ImagePreviewModal from './ImagePreviewModal';
import { ImSpinner8 } from 'react-icons/im';
import { useAuth } from '@/hooks/use-auth';
import { useGetProperties } from '@/api/property';

const AvailableProperties = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const router = useRouter();
  const { data: propertys, isFetching } = useGetProperties();
  const {user}=useAuth()

  const goToOffer = () => {
    router.push('/home/invest/offer');
  };

  const goToProperty = (event,id) => {
    event.stopPropagation();
    // setGlobalSelectedProperty(property);
    router.push(`/home/invest/property/${id}`);
  };

  const openImageModal = (event,property, index) => {
    event.stopPropagation();
    setSelectedProperty(property);
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const handleNextImage = () => {
    if (selectedImageIndex < selectedProperty.pictures.length + selectedProperty.videos.length - 1) {
      setSelectedImageIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousImage = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex((prevIndex) => prevIndex - 1);
    }
  };

  const hasInvested=(property)=>{
const invested=property.investors.find(investor=>investor.user._id==user._id)
return !!invested
  }

//   const availableProperties=()=>{
// const filteredProperties=propertys?.filter(property=>property.investors.find(investor=>investor.user._id==user._id))
// return filteredProperties
//   }

const availableProperties = () => {
  return propertys?.filter(property =>  !property.sold );
};

  

  const handleViewDetail=(id)=>{
    router.push(`/home/buy-property/details/${id}`);
  }

  return (
    <div>


      <div className="my-4">
        <h1 className="text-xl mb-2">Properties Available For sale</h1>
        {isFetching?<div className='h-[25rem] flex items-center justify-center w-full'><ImSpinner8 className='animate-spin text-indigo-500' size={30} />
          </div>:
        <div className="space-y-6 max-h-[40rem] overflow-scroll">
          {availableProperties().length>0?availableProperties()?.map((property, i) => (
              <div onClick={()=>handleViewDetail(property._id)} key={i} className="rounded-lg bg-slate-50 flex flex-col md:flex-row md:items-center gap-6 w-full p-2 relative">
              <div className='absolute top-2 right-2'>
                <Chip color={property.sold?'Success':'warning'} >{property.sold?'Sold Out':'Available for sale'}</Chip>
              </div>
              <img
                src={property.pictures[0]}
                alt=""
                className="w-[8rem] h-[8rem] rounded-lg cursor-pointer"
                onClick={(e) => openImageModal(e,property, 0)}
              />
              <div className="flex flex-col justify-between gap-6 w-full">
                  <div className='grid grid-cols-4'>
                    <p className="line-clamp-1 text-gray-500">Name</p>
                    <p className="line-clamp-1 col-span-3">{property.productName}</p>
                  </div>
                  <div className='grid grid-cols-4'>
                    <p className="line-clamp-1 text-gray-500">Location</p>
                    <p className="line-clamp-1 col-span-3">{property.location}</p>
                  </div>
                  <div className='grid grid-cols-4'>
                    <p className="line-clamp-1 text-gray-500">Price</p>
                    <p className="line-clamp-1 col-span-3">{formatCurrency('NGN', property.amount)}</p>
                  </div>
              </div>
            </div>
          )): <div className='flex justify-center items-center min-h-[30rem] text-gray-400'><p>No property available</p></div> }
        </div>
        }
      </div>

      {/* Image Modal */}
  <ImagePreviewModal selectedImageIndex={selectedImageIndex} selectedItem={selectedProperty} handleNextImage={handleNextImage} handlePreviousImage={handlePreviousImage} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default AvailableProperties;