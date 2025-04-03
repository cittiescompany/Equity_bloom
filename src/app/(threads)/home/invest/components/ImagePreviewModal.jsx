/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button, Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

const ImagePreviewModal = ({
  isModalOpen,
  setIsModalOpen,
  handlePreviousImage,
  handleNextImage,
  selectedInvestment,
  selectedImageIndex,
}) => {
  // Combine pictures and videos into a single array
  const mediaArray = [...(selectedInvestment?.pictures || []), ...(selectedInvestment?.videos || [])];

  // Check if the current media is a video
  // const isVideo = (url) => {
  //   if (!url) return false;
  //   const videoExtensions = ['.mp4', '.mov', '.webm'];
  //   return videoExtensions.some((ext) => {
  //     // Remove any duplicate extensions and check
  //     const cleanUrl = url.split('.').slice(0, -1).join('.');
  //     return cleanUrl.toLowerCase().endsWith(ext);
  //   });
  // };

  const isVideo = (url) => {
    if (!url) return false;
    const videoExtensions = ['.mp4', '.mov', '.webm'];
    return videoExtensions.some((ext) => url.toLowerCase().endsWith(ext));
  };

  // Log for debugging
  console.log('Media Array:', mediaArray);
  console.log('Selected Index:', selectedImageIndex);
  console.log('Current Media:', mediaArray[selectedImageIndex]);
  console.log('Is Video:', isVideo(mediaArray[selectedImageIndex]));

  return (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} size="2xl">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Media Preview</ModalHeader>
        <ModalBody>
          {selectedInvestment && (
            <div className="relative">
              <div className="w-full h-[400px] overflow-hidden my-4 flex items-center justify-center">
                {isVideo(mediaArray[selectedImageIndex]) ? (
                  <video
                    src={mediaArray[selectedImageIndex]}
                    controls
                    className="w-full h-full object-cover rounded-lg"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={mediaArray[selectedImageIndex]}
                    alt={`Preview ${selectedImageIndex}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}
              </div>
              {mediaArray.length > 1 && (
                <>
                  <Button
                    isIconOnly
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full"
                    onPress={handlePreviousImage}
                    disabled={selectedImageIndex === 0}
                  >
                    <IoChevronBackOutline size={16} />
                  </Button>
                  <Button
                    isIconOnly
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full"
                    onPress={handleNextImage}
                    disabled={selectedImageIndex === mediaArray.length - 1}
                  >
                    <IoChevronForwardOutline size={16} />
                  </Button>
                </>
              )}
            </div>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ImagePreviewModal;