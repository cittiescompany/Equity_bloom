"use client";
import React, { useState } from "react";
import { Button, Card, Input } from "@nextui-org/react";
import countries from "@/lib/countries";
import { useShallow } from "zustand/react/shallow";
import useTransaction from "@/store/Global";

const formatNumber = (value) => {
  const parts = value.split(".");
  const integerPart = parts[0].replace(/,/g, ""); 
  const decimalPart = parts[1] ? "." + parts[1] : ""; 
  const formattedInteger = Number(integerPart).toLocaleString("en-US");
  return formattedInteger + decimalPart;
};

const countriesData = countries;
const Hero = () => {
  const [to, from, updateData] = useTransaction(
    useShallow((state) => [state.data.to, state.data.from, state.updateData])
  );
  const [amount, setAmount] = useState(0);

  const handleChange = (event) => {
    const value = event.target.value;
    const sanitizedValue = value.replace(/[^0-9.,]/g, "");
    const formattedValue = formatNumber(sanitizedValue);
    setAmount(formattedValue);
  };

  const fromCountry = countriesData[from];
  const toCountry = countriesData[to];

  const handleKeyDown = (event) => {
    if (
      event.key === "ArrowUp" ||
      event.key === "ArrowDown" ||
      event.key === "e"
    ) {
      event.preventDefault();
    }
  };
  return (
    <section className=" bg-[#D3EAEC]">
      <div className="min-h-[110vh] grid grid-cols-1 sm:grid-cols-2  justify-center">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="sm:w-2/3 flex flex-col items-center justify-center">
            <h4 className="bg-[#862796] text-white px-4 py-3 text-xl">
              New customer offer
            </h4>
            <strong className="text-4xl text-center">
              Send money to {toCountry?.name} from the {fromCountry?.name}
            </strong>
            <p className="text-xl  mt-4 text-center">
              Enjoy a special exchange rate on your first transfer, and no fees
              on all transfers
            </p>
          </div>
        </div>
        <div>
          <Card className="bg-white  mt-10 sm:mt-0 sm:w-[500px] shadow-inner py-11 relative mx-auto sm:mx-0  sm:top-[10%] flex flex-col gap-4 rounded-3xl px-6">
            <strong>You Send</strong>
            <div className="flex h-[50px] text-[14px]  w-full items-center  rounded-lg border-2 border-gray-500 transition-all duration-150  ease-in-out">
              <input
                required=""
                className="bg-transparent  px-3 py-1 rounded-l-lg focus:outline-none w-full"
                pattern="^[0-9,]*$"
                id="currency-input"
                name="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                onKeyDown={handleChange}
                onWheel={(e) => e.currentTarget.blur()}
                type="text"
                placeholder="1,234,567.89"
              />
              <span className="mr-2">{fromCountry?.currencyCode}</span>
            </div>
            <p className="">Or select an amount</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 sm:gap-3 gap-1">
              {[200, 500, 1000].map((item, index) => (
                <Button
                  key={index}
                  className="w-full h-[45px] rounded-2xl border-2 bg-white-100 shadow-sm transition-all duration-150  ease-in-out"
                >
                  {item} {fromCountry?.currencyCode}
                </Button>
              ))}
            </div>
            <strong>They receive</strong>
            <div className="flex h-[50px] text-[14px]  w-full items-center  rounded-lg border-2 border-gray-500 transition-all duration-150  ease-in-out">
              <input
                required=""
                className="bg-transparent  px-3 py-1 rounded-l-lg focus:outline-none w-full"
                pattern="^[0-9,]*$"
                id="currency-input"
                name="text"
                onKeyDown={handleKeyDown}
                onWheel={(e) => e.currentTarget.blur()}
                type="number"
                 placeholder="1,234,567.89"
              />
              <span className="mr-2">{toCountry?.currencyCode}</span>
            </div>
            <div>
              <p className="text-[#862796]">Special rate</p>
              <strong>
                <span>1 {fromCountry?.currencyCode}</span> = 300.00{" "}
                {toCountry?.currencyCode}
              </strong>
              <div className="mt-3 flex flex-col gap-2">
                <span className="flex justify-between font-bold ">
                  <span>Fee</span>
                  <span className="text-primary-600 ">Zero fees</span>
                </span>
                <span className="flex justify-between font-bold">
                  <span>Total cost</span>
                  <span>100.00 USD</span>
                </span>
              </div>
            </div>
            <Button className="w-[85%] mx-auto mt-5 h-[50px] bg-primary-800 rounded-lg hover:bg-primary-600 text-lg text-white">
              Get this rate
            </Button>
          </Card>
        </div>
      </div>
      <div className="text-center text-md sm:px-36 py-6">
        New customers only. One per customer. Limited time offer. Any rates
        shown are subject to change. Promotional FX rate applies to first 500.00
        USD sent. See Terms and Conditions for details.
      </div>
    </section>
  );
};

export default Hero;
