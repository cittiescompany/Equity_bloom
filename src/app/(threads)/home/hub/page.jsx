"use client";

import { useCalculateCurrencyMutation } from "@/api/investment";
import { useAuth } from "@/hooks/use-auth";
import { formatCurrency } from "@/lib/utils";
import { useState } from "react";
import { FaCcVisa } from "react-icons/fa";
import { FaSync } from "react-icons/fa";
import { PaystackButton } from "react-paystack";
import PaymentModal from "./components/PaymentModal";
import { Button } from "@nextui-org/react";

const PaymentHubPage = () => {
  const { user } = useAuth();
  const [service, setService] = useState("");
  const [usdAmount, setUsdAmount] = useState("");
  const [checkoutLink, setCheckoutLink] = useState("");
  const [isOpen, setIsOpen] = useState(false)

  const {data:nairaAmount,mutateAsync, isPending}=useCalculateCurrencyMutation()

  const services = [
    "Netflix", "Spotify", "Apple Music", "Youtube Premium", "Amazon",
    "AliExpress", "eBay", "Google Cloud", "AWS", "Domains", "Udemy",
    "Coursera", "LinkedIn Learning", "Facebook Ads", "Google Ads",
    "Instagram Ads", "Upwork", "Fiverr", "Freelancer", "Xbox", "Steam",
    "Epic Games", "Bybit", "Binance", "Others"
  ];

  const handleConvert = async() => {
    await mutateAsync({amount: usdAmount, from:'US', to:'NG'})
  };

  console.log("nairaAmount:",nairaAmount);
  

  // Paystack configuration
  const publicKey = "pk_test_bc994b313ae14fef8d8f893742a7a68f283527b9"; // Replace with your Paystack public key
  const paystackAmount = nairaAmount * 100; // Convert to kobo

  const componentProps = {
    email:user?.email,
    amount: paystackAmount,
    currency: "NGN",
    publicKey,
    text: "Pay with Paystack",
    metadata: {
      service: service, // Netflix, Spotify, etc.
      checkoutLink: checkoutLink, // Product link if available
    },
    onSuccess: () => alert("Payment successful!"),
    onClose: () => alert("Payment canceled"),
  };

  console.log(user);
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-4">
      {/* ATM Card UI */}
      <div className="relative w-96 h-56 bg-blue-700 text-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between">
          <span className="text-xl font-semibold">UBA</span>
          <FaCcVisa className="text-3xl text-white" />
        </div>
        <div className="mt-6 text-lg tracking-wider">**** **** **** 4321</div>
        <div className="mt-4 space-y-2">
          <span className="text-sm">Card Holder</span>
          {/* <div className="text-xl font-semibold">{fullName || "Your Name"}</div> */}
          <div className="text-xl font-semibold">{user?.firstName} {user?.lastName}</div>
        </div>
      </div>

      {/* Payment Form */}
      <div className="bg-white mt-8 p-6 rounded-lg shadow-md w-full">
        <h2 className="text-lg font-semibold mb-4">Pay for your services</h2>

        {/* Select Service */}
        <label className="block mt-4 text-sm font-medium text-gray-700">Select Service</label>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full mt-1 p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Choose a service</option>
          {services.map((s, i) => (
            <option key={i} value={s}>{s}</option>
          ))}
        </select>

        {/* USD Amount */}
        <label className="block mt-4 text-sm font-medium text-gray-700">Amount in USD</label>
        <input
          type="number"
          value={usdAmount}
          onChange={(e) => setUsdAmount(e.target.value)}
          placeholder="Enter amount in USD"
          className="w-full mt-1 p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />

        {/* Convert Button */}
        <button
          onClick={handleConvert}
          disabled={usdAmount === ""||isPending}
          className="flex items-center justify-center w-full mt-4 bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed text-white p-2 rounded-lg hover:bg-blue-700 transition"
        >
          {isPending? <span className="flex item-center justify-center gap-1"><FaSync className="w-5 h-5 ml-2 animate-spin duration-500" /> Converting</span> :'Convert to Naira'}
        </button>

        {/* Naira Amount */}
        <label className="block mt-4 text-sm font-medium text-gray-700">Amount in Naira</label>
        <input
          type="text"
          value={nairaAmount?formatCurrency('NGN',nairaAmount):''}
          readOnly
          className="w-full mt-1 p-2 border bg-gray-100 rounded-lg"
        />

        {/* Checkout Link */}
        <label className="block mt-4 text-sm font-medium text-gray-700">Product Checkout Link</label>
        <input
          type="text"
          value={checkoutLink}
          onChange={(e) => setCheckoutLink(e.target.value)}
          placeholder="Paste checkout link"
          className="w-full mt-1 p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
        />

        {/* Paystack Payment Button */}
        <div className="mt-6 flex flex-col gap-2">
          <PaystackButton
            {...componentProps}
            disabled={!nairaAmount}
            className="w-full bg-green-600 disabled:bg-green-300 disabled:cursor-not-allowed text-white p-2 rounded-lg hover:bg-green-700 transition"
          />
          <Button isDisabled={!nairaAmount} onPress={()=>setIsOpen(true)} className="w-full bg-gray-700 text-white p-2 rounded-lg hover:bg-gray-800 transition">
            Pay with transfer
          </Button>
        </div>

        <PaymentModal service={service} amount={nairaAmount} isOpen={isOpen} onClose={()=>setIsOpen(false)} />
      </div>
    </div>
  );
};


export default PaymentHubPage