// /* eslint-disable @next/next/no-img-element */
// 'use client'
// import { useGetInvestments } from '@/api/investment';
// import { formatCurrency } from '@/lib/utils';
// import { useInvestmentStore } from '@/store/Global';
// import { Button } from '@nextui-org/react'
// import { useRouter } from 'next/navigation';
// import React, { useState } from 'react'
// import { IoMdAdd } from 'react-icons/io'
// import { LuEyeClosed } from "react-icons/lu";
// import { MdOutlineArrowRightAlt } from 'react-icons/md';


// const InvestPage = () => {
//     const [hideAmount, setHideAmount] = useState(false)
//      const router = useRouter()
//      const {data,setSelectedInvestment}=useInvestmentStore()
//      const {data:investments}=useGetInvestments()
//      console.log(investments);
     

//     // const investmentOpportunities = [
//     //     {
//     //       image: "https://photos.zillowstatic.com/fp/a1587d5bae3b58dfa2c97d1101138143-cc_ft_768.webp",
//     //       title: "Verified Real Estate Investment",
//     //       annualReturn: "30% p.a",
//     //       description: "Return on investment",
//     //       investmentAmount: 10000,
//     //       investorsCount: 19128,
//     //       duration: "Per Unit",
//     //       status: "Invest Now",
//     //     },
//     //     {
//     //       image: "https://photos.zillowstatic.com/fp/33abe06f30f128aecf30f7e1a75507bf-cc_ft_1536.webp",
//     //       title: "Corporate Debt Notes Series",
//     //       annualReturn: "11.1% p.a",
//     //       description: "Returns in 6 months",
//     //       investmentAmount: 5000,
//     //       investorsCount: 709,
//     //       duration: "Per Unit",
//     //       status: "Sold Out",
//     //     },
//     //     {
//     //       image: "https://photos.zillowstatic.com/fp/a211ef3ebf5bf1a7742e7cfd53e09a58-cc_ft_1536.webp",
//     //       title: "Venture Capital Fund",
//     //       annualReturn: "25% p.a",
//     //       description: "High growth potential",
//     //       investmentAmount: 15000,
//     //       investorsCount: 5321,
//     //       duration: "Per Unit",
//     //       status: "Invest Now",
//     //     },
//     //     {
//     //       image: "https://photos.zillowstatic.com/fp/c2672a25a83b9689aa1c5b53e4a5bf2a-cc_ft_768.webp",
//     //       title: "Startup Equity Investment",
//     //       annualReturn: "20% p.a",
//     //       description: "Equity stake in promising startups",
//     //       investmentAmount: 8000,
//     //       investorsCount: 432,
//     //       duration: "Per Unit",
//     //       status: "Invest Now",
//     //     },
//     //     {
//     //       image: "https://photos.zillowstatic.com/fp/7375bdd70e931851043daff4a4c51080-cc_ft_768.webp",
//     //       title: "Land Acquisition Opportunity",
//     //       annualReturn: "15% p.a",
//     //       description: "Steady appreciation of land",
//     //       investmentAmount: 12000,
//     //       investorsCount: 1024,
//     //       duration: "Per Unit",
//     //       status: "Sold Out",
//     //     },
//     //     {
//     //       image: "https://photos.zillowstatic.com/fp/11fd1011029ba7cd0b4f66e6783baaf5-cc_ft_768.webp",
//     //       title: "Commercial Property Investment",
//     //       annualReturn: "28% p.a",
//     //       description: "Rental income and capital gains",
//     //       investmentAmount: 20000,
//     //       investorsCount: 8421,
//     //       duration: "Per Unit",
//     //       status: "Invest Now",
//     //     },
//     //     {
//     //       image: "https://photos.zillowstatic.com/fp/9a8b69f9ab2240b532e226dd22f48aad-cc_ft_768.webp",
//     //       title: "Property Development Project",
//     //       annualReturn: "22% p.a",
//     //       description: "Pre-sale investment opportunity",
//     //       investmentAmount: 18000,
//     //       investorsCount: 651,
//     //       duration: "Per Unit",
//     //       status: "Invest Now",
//     //     },
//     //     {
//     //       image: "https://photos.zillowstatic.com/fp/42cc799e4a0cb9d176d568e857c5b3e7-cc_ft_1536.webp",
//     //       title: "Infrastructure Bond",
//     //       annualReturn: "10% p.a",
//     //       description: "Stable long-term bond",
//     //       investmentAmount: 5000,
//     //       investorsCount: 3120,
//     //       duration: "Per Unit",
//     //       status: "Sold Out",
//     //     },
//     //     {
//     //       image: "https://photos.zillowstatic.com/fp/1711b0c26c20f0ce3f61c21de358492b-cc_ft_768.webp",
//     //       title: "Real Estate Finance Fund",
//     //       annualReturn: "18% p.a",
//     //       description: "Returns from mortgage financing",
//     //       investmentAmount: 9000,
//     //       investorsCount: 2901,
//     //       duration: "Per Unit",
//     //       status: "Invest Now",
//     //     },
//     //     {
//     //       image: "https://photos.zillowstatic.com/fp/42ccd7f33830d1e1ac786666d9d9042d-cc_ft_1536.webp",
//     //       title: "Private Equity Investment",
//     //       annualReturn: "35% p.a",
//     //       description: "Exclusive private equity deals",
//     //       investmentAmount: 25000,
//     //       investorsCount: 1500,
//     //       duration: "Per Unit",
//     //       status: "Invest Now",
//     //     },
//     //     {
//     //       image: "https://photos.zillowstatic.com/fp/ee7bce8869a2d85a570b83adcce7a7ec-cc_ft_768.webp",
//     //       title: "Balanced Investment Fund",
//     //       annualReturn: "12% p.a",
//     //       description: "Diversified portfolio",
//     //       investmentAmount: 7000,
//     //       investorsCount: 980,
//     //       duration: "Per Unit",
//     //       status: "Invest Now",
//     //     },
//     //     {
//     //       image: "https://photos.zillowstatic.com/fp/9ce83b1432e205fd780b4a0662211024-cc_ft_768.webp",
//     //       title: "Green Energy Investment",
//     //       annualReturn: "16% p.a",
//     //       description: "Sustainable energy projects",
//     //       investmentAmount: 11000,
//     //       investorsCount: 2000,
//     //       duration: "Per Unit",
//     //       status: "Sold Out",
//     //     },
//     //     {
//     //       image: "https://photos.zillowstatic.com/fp/3d18524529d5594dbf327d673796c61c-p_e.webp",
//     //       title: "Crypto Asset Fund",
//     //       annualReturn: "40% p.a",
//     //       description: "High volatility, high returns",
//     //       investmentAmount: 30000,
//     //       investorsCount: 6500,
//     //       duration: "Per Unit",
//     //       status: "Invest Now",
//     //     },
//     //     {
//     //       image: "https://photos.zillowstatic.com/fp/74951a340ee124987b9876d915b672e5-p_e.webp",
//     //       title: "Forex Trading Fund",
//     //       annualReturn: "14% p.a",
//     //       description: "Currency market opportunities",
//     //       investmentAmount: 6000,
//     //       investorsCount: 1400,
//     //       duration: "Per Unit",
//     //       status: "Invest Now",
//     //     },
//     //     {
//     //       image: "https://photos.zillowstatic.com/fp/70b07e8a37a952620d380b8d8e8dd9ca-p_e.webp",
//     //       title: "Commodities Investment",
//     //       annualReturn: "13% p.a",
//     //       description: "Invest in precious metals and commodities",
//     //       investmentAmount: 7500,
//     //       investorsCount: 875,
//     //       duration: "Per Unit",
//     //       status: "Sold Out",
//     //     },
//     //     {
//     //       image: "https://photos.zillowstatic.com/fp/7fdde53ef39ccfeac054f14254796987-p_e.webp",
//     //       title: "Sustainable Agriculture Fund",
//     //       annualReturn: "17% p.a",
//     //       description: "Invest in sustainable farming",
//     //       investmentAmount: 9500,
//     //       investorsCount: 1020,
//     //       duration: "Per Unit",
//     //       status: "Invest Now",
//     //     },
//     //     {
//     //       image: "https://photos.zillowstatic.com/fp/b0f5efeff0d00ab345da554c6e6bdc3f-p_e.webp",
//     //       title: "Tourism & Hospitality Investment",
//     //       annualReturn: "19% p.a",
//     //       description: "Returns from tourism projects",
//     //       investmentAmount: 8500,
//     //       investorsCount: 450,
//     //       duration: "Per Unit",
//     //       status: "Invest Now",
//     //     },
//     //     {
//     //       image: "https://photos.zillowstatic.com/fp/ee85cd48270c8ed02a77f1ae4928b8b2-p_e.webp",
//     //       title: "Healthcare Investment Opportunity",
//     //       annualReturn: "23% p.a",
//     //       description: "Invest in healthcare innovations",
//     //       investmentAmount: 13000,
//     //       investorsCount: 770,
//     //       duration: "Per Unit",
//     //       status: "Sold Out",
//     //     },
//     //     {
//     //       image: "https://photos.zillowstatic.com/fp/2987f3e93df5687dbff12959bc6b19bb-cc_ft_1536.webp",
//     //       title: "Education Sector Investment",
//     //       annualReturn: "15% p.a",
//     //       description: "Returns from educational projects",
//     //       investmentAmount: 8000,
//     //       investorsCount: 980,
//     //       duration: "Per Unit",
//     //       status: "Invest Now",
//     //     },
//     //     {
//     //       image: "https://photos.zillowstatic.com/fp/24c8c64df91fa240c5292a8bb7503bb6-p_e.webp",
//     //       title: "Technology Investment Fund",
//     //       annualReturn: "27% p.a",
//     //       description: "Invest in tech startups",
//     //       investmentAmount: 22000,
//     //       investorsCount: 4200,
//     //       duration: "Per Unit",
//     //       status: "Invest Now",
//     //     }
//     //   ];
//       {/* {
//           investmentOpportunities?.map((investmentOpportunity,i)=>(
//       <div key={i} className='rounded-lg bg-slate-50 flex items-center gap-6 w-full p-2'>
//           <img src={investmentOpportunity.image} alt="" className='w-[8rem] h-[8rem] rounded-lg'  />
//           <div className='flex flex-col justify-between gap-6 w-full'>
//           <div className='flex justify-between w-full'>
//               <div>
//               <h2 className='line-clamp-1'>{investmentOpportunity.title}</h2>
//               <p className='text-sm mt-2'><span className='text-green-500'>{investmentOpportunity.annualReturn}</span> <span className='text-gray-500'>{investmentOpportunity.description}</span></p>
//               </div>
//               {investmentOpportunity.status=='Invest Now'?
//               <Button size='sm' className='rounded-full px-4 text-green-500 bg-green-100' onPress={()=>goToInvestment(investmentOpportunity)}>{investmentOpportunity.status}</Button>:
              
//               <div className='flex flex-col gap-4'>
//                 <Button size='sm' className='rounded-full px-4 text-red-500 bg-red-100'>{investmentOpportunity.status}</Button>
//                 <Button onPress={goToOffer} size='sm' className='rounded-full px-4 text-blue-500 bg-blue-100'>Buy out</Button>
//               </div>
//               }
//           </div>
// <div className='flex items-center gap-8'>
//   <div><p>{formatCurrency('NGN',investmentOpportunity.investmentAmount)}</p> <span className='text-gray-500 text-sm'>{investmentOpportunity.duration}</span></div>
//   <div><p>{investmentOpportunity.investorsCount}</p> <span className='text-gray-500 text-sm'>Investors</span></div>
// </div>
//           </div>
//       </div>

//           ))
//       } */}
      
//       const goToOffer = ()=>{
//         router.push('/home/invest/offer')
//       }

//       const goToInvestment = (selectedInvestment)=>{
//         setSelectedInvestment(selectedInvestment)
//         router.push('/home/invest/investment')
//       }

      
      
//   return (
//     <section className='md:w-[45%] min-h-screen bg-white mx-auto my-4'>
//         <div className='bg-blue-950 rounded-t-3xl h-[15rem] flex flex-col justify-between text-gray-300 p-6'>
//             <div className='flex justify-between items-center'>
//                 <Button size='sm' className='font-semibold rounded-full px-4 bg-yellow-800 text-white' startContent={<IoMdAdd size={16} />}>Quick save</Button>
//                 <Button size='sm' className='font-semibold rounded-full px-4 text-gray-200 bg-blue-800' endContent={<MdOutlineArrowRightAlt size={22} />}>View Savings</Button>
//             </div>

// <div className='flex justify-between items-end'>
//     <div className=''>
//         <p className='text-lg font-semibold mb-2'>Current Balance</p>
//         <p className='flex gap-4 items-end'><span className='text-2xl font-bold'>{hideAmount?'**********':formatCurrency('NGN',data.wallet_balance)}</span> <span><LuEyeClosed size={20} className='cursor-pointer' onClick={()=>setHideAmount(!hideAmount)} />
//         </span></p>
//     </div>
//     <div className='flex items-center gap-6'>
//     <Button className='rounded-md bg-gray-200 text-blue-800'>Withdraw</Button>
//     <Button className='rounded-md bg-transparent text-gray-200 border border-gray-200'>Transfer</Button>
//     </div>
// </div>
//         </div>


// <div className='mx-4 my-8'>
//         <h1 className='text-xl mb-2'>Investment Opportunities</h1>
//     <div className='space-y-6 max-h-[40rem] overflow-scroll'>
//         {
//             investments?.map((investment,i)=>(
//         <div key={i} className='rounded-lg bg-slate-50 flex items-center gap-6 w-full p-2'>
//             <img src={investment.pictures[0]} alt="" className='w-[8rem] h-[8rem] rounded-lg'  />
//             <div className='flex flex-col justify-between gap-6 w-full'>
//             <div className='flex justify-between w-full'>
//                 <div>
//                 <h2 className='line-clamp-1'>{investment.productName}</h2>
//                 <p className='text-sm mt-2'><span className='text-green-500'>{investment.rate}% {investment.period}</span> <span className='text-gray-500'>{investment.description}</span></p>
//                 </div>
//                 {investment.status=='bought'? <div className='flex flex-col gap-4'>
//                   <Button size='sm' className='rounded-full px-4 text-red-500 bg-red-100'>Sold Out</Button>
//                   <Button onPress={goToOffer} size='sm' className='rounded-full px-4 text-blue-500 bg-blue-100'>Buy out</Button>
//                 </div>:
//                 <Button size='sm' className='rounded-full px-4 text-green-500 bg-green-100' onPress={()=>goToInvestment(investment)}>Invest Now</Button>
//                 }
//             </div>
// <div className='flex items-center gap-8'>
//     <div><p>{formatCurrency('NGN',investment.amountPerUnit)}</p> <span className='text-gray-500 text-sm'>{investment.duration}</span></div>
//     <div><p>{investment.investorsCount}</p> <span className='text-gray-500 text-sm'>Investors</span></div>
// </div>
//             </div>
//         </div>

//             ))
//         }
//     </div>
// </div>
//     </section>
//   )
// }

// export default InvestPage



/* eslint-disable @next/next/no-img-element */
'use client';

import Balance from "./components/Balance";
import AvailableInvestments from './components/AvailableInvestments';
import { useState } from "react";
import { Tab, Tabs } from "@nextui-org/react";
import MyInvestments from "./components/MyInvestments";

const InvestPage = () => {
  const [tab, setTab] = useState("available-investments");
  return (
    // <section className="md:w-[45%] min-h-screen bg-white mx-auto my-4">
    <section className="min-h-screen">
<Balance/>

<div className="m-4">
<Tabs
            variant="bordered"
            aria-label="Options"
            color="primary"
            radius="full"
            classNames={{
              tab: "text-base px-4",
              tabList: "shadow-none border",
              cursor:'bg-indigo-600 !text-white',
            }}
            selectedKey={tab}
            onSelectionChange={(key) => setTab(key)}
            className='-z-50'
          >
            
            <Tab key="available-investments" title="Available Investments">
          <AvailableInvestments/>
            </Tab>
            <Tab key="my-investments" title="My Investments">
         <MyInvestments/>
            </Tab>
          </Tabs>
</div>
    </section>
  );
};

export default InvestPage;