/* eslint-disable @next/next/no-img-element */
import Content from '@/app/(threads)/home/buy-property/details/[id]/content.jsx' 

const InvestmentDetails = async ({params}) => {
  const {id}= await params;

  
  return (
    <Content id={id} />
  )
}

export default InvestmentDetails