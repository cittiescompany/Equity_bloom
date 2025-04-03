/* eslint-disable @next/next/no-img-element */
'user client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// Import required modules
import { Autoplay } from 'swiper/modules';

export default function Carousel({swiperRef,intervalDelay}) {
    const scrollImages=[
        'https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces,q_auto/https://www.gcu.edu/sites/default/files/2024-09/CEO%20in%20a%20meeting.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRre255zeaB3KB3_sMxgD11VtiAUQi4piYzGg&s',
        'data:image/jpeg;base64,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',
        'https://www.n2growth.com/wp-content/uploads/2019/08/happy-ceo-at-desk.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfsl5YXZoGQxT9e6qk3_w63y6veCfqgY3DA&s'
    ]
    return (
        <div className="relative w-full h-full">
          {/* Background Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-blue-800 opacity-50 z-10"></div>
    
          <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: intervalDelay, // Sync with text delay
          disableOnInteraction: false,
        }}
            className="mySwiper w-full h-full"
          >
            {scrollImages.map((src, index) => (
              <SwiperSlide key={index} className="relative w-full h-full overflow-hidden">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="mySwiper-slide absolute top-0 left-0 w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
//   return (
//     <div className="h-full relative w-full">
//       {/* Swiper Component */}
//       <Swiper
//         onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
//         slidesPerView={1}
//         spaceBetween={30}
//         loop={true}
//         autoplay={{
//           delay: intervalDelay, // Sync with text delay
//           disableOnInteraction: false,
//         }}
//         modules={[Autoplay]}
//         className="mySwiper"
//       >
//         {scrollImages?.map((item, i) => (
//           <SwiperSlide key={i} className="mySwiper-slide">
//             <img src={item} alt={`Slide ${i + 1}`} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
}


