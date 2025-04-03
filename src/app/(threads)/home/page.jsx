"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import CountryFlag from "@/components/ui/CountryFlag";
import useTransaction, { useDataStore } from "@/store/Global";
import countries from "@/lib/countries";
import { useShallow } from "zustand/react/shallow";
import { cn, formatCurrency } from "@/lib/utils";
import { useRouter } from "next/navigation";
import axios from "axios";

const countriesData = countries;
const data = [
  {
    image:
      "https://res.cloudinary.com/daruz/image/upload/v1736235552/ls0syyq4yhpnts1kjuov.png",
    head: "Great rates",
    text: "Great rates, low fees, and a special new customer offer.",
  },
  {
    image:
      "https://res.cloudinary.com/daruz/image/upload/v1736235642/track3x.lpwzIu6RbkeR3PaC_hfuykt.webp",
    head: "Track your transfer",
    text: "Get status updates from start to finish.",
  },
  {
    image:
      "https://res.cloudinary.com/daruz/image/upload/v1736235664/shield3x.vxIr8lCXb55Zjzox_yiwf8o.webp",
    head: "Safe and secure",
    text: "Your information is always confidential and your funds are protected.",
  },
];
const page = () => {
  const {data:storeData,updateData:updateStoreData}=useDataStore()
  const router = useRouter();
  const [to, from] = useTransaction(
    useShallow((state) => [state.data.to, state.data.from])
  );

    
   useEffect(() => {
      const getData=async()=>{
        // const result = await fetchConvertedAmount(1);
        const result = await handleCalculate(1);
        updateStoreData({exchangeRate:result});
      }

      getData()
    }, []);

    // const fetchConvertedAmount = async (num) => {
    //   if (!num) return;
  
    //   try {
    //     const response = await fetch(
    //       `/api/convert?amount=${num}&from=${countries[from]?.currencyCode}&to=${countries[to]?.currencyCode}`
    //     );
    //     const data = await response.json();
        
        
    //     return data?.convertedAmount;
    //     // setConvertedAmount(data.convertedAmount?.toFixed(2) || "Error");
    //   } catch (error) {
    //     console.error("Conversion Error:", error);
    //   }
    // };
  
    const handleCalculate = async (amount) => {
      try {
        const response = await axios.get("https://dashboard-backend-hazel-five.vercel.app/api/get-rate", {
          params: { fromCountryCode: countries[from]?.code, toCountryCode: countries[to]?.code },
        });
        
        if (response.data) {
          const exchangeRate = response.data.rate;
          const calculatedAmount = parseFloat(amount) * exchangeRate;
          return calculatedAmount.toFixed(2);
        } else {
          console.log("Exchange rate not found");
        }
      } catch (error) {
        console.log("Error fetching exchange rate");
      }
    };
    return (
    <>
      <div className="bg-blue-900 py-3 text-center text-lg text-white">
        <Button disabled className="bg-inherit bordered text-white">
          <CountryFlag
            rounded
            code={countriesData[to]?.code}
            className=" rounded-md w-10 h-7"
          />
          {countries[to]?.name}
        </Button>
      </div>
      <section className="container mx-auto my-6">
        {/* <main className="lg:grid flex grid-cols-1 lg:grid-cols-2 gap-4 flex-col-reverse"> */}
        <main className="flex flex-col-reverse gap-4">
          <div className="flex flex-col md:grid grid-cols-2 gap-8 items-center">
            {data.map((item, index) => (
              <div className="card  w-[300px] text-center  " key={index}>
                <Image
                  src={item.image}
                  alt="image"
                  className="mx-auto"
                  width={80}
                  height={80}
                />
                <h3 className="font-bold">{item.head}</h3>
                <p>{item.text}</p>
              </div>
            ))}
            <button
              onClick={() => router.push("/home/transfer")}
              className="p-4 w-[300px] border-3 text-blue-700 border-blue-700  rounded-lg"
            >
              Get Started
            </button>
          </div>
          <div className="flex flex-col md:px-10 lg:px-28">
            <strong className="text-lg">Exchange rate</strong>
            <div className="border rounded-xl p-4">
              <div className="flex items-center justify-between">
                <p className="">Sending to {countries[to]?.name}</p>
                <p className="border rounded-lg">
                  <SelectCountries  indacator="to" />
                </p>
              </div>
              <div>
                <div className="opacity-55">Exchange Rate</div>
                <div className="font-bold font-Inter mt-2">
                {formatCurrency(countries[from]?.currencyCode,1)} = {formatCurrency(countries[to]?.currencyCode,storeData?.exchangeRate)}
                </div>
                <button
                  onClick={() => router.push("/home/transfer")}
                  className="bg-[#BAD477] w-full text-white py-2 px-1 transition-all hover:scale-105 my-5 rounded-3xl"
                >
                  Send money
                </button>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default page;
const SelectCountries = ({ indacator }) => {
  const [open, setOpen] = useState(false);
  const [to, from, updateData] = useTransaction(
    useShallow((state) => [state.data.to, state.data.from, state.updateData])
  );
  const data = indacator === "from" ? from : to;


  return (
    <Popover
      isOpen={open}
      onOpenChange={setOpen}
      placement="bottom-end"
      showArrow={true}
    >
      <PopoverTrigger>
        <Button className="bg-inherit bordered">
          <CountryFlag
            rounded
            code={countriesData[data]?.code}
            className=" rounded-md w-10 h-7"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px]">
        <div className="px-4 py-2 w-[200px] gap-4 grid grid-cols-1 overflow-y-scroll  custom-scrollbar">
          {countriesData.map((country, index) =>
            index === (indacator === "from" ? to : from) ? null : (
              <Button
                key={index}
                onClick={() => {
                  updateData({ [indacator]: index });
                  setOpen(false);
                }}
                className={cn(
                  "flex flex-col h-11 gap-1 items-stretch rounded-md hover:bg-primary-500 hover:text-white",
                  { "border-2 border-primary-500": data === index }
                )}
              >
                <div className="flex flex-row gap-2 items-center">
                  <CountryFlag
                    rounded
                    code={country.code}
                    className="h-7 w-7"
                  />
                  <p className="text-sm font-medium">{country.name}</p>
                </div>
              </Button>
            )
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};
