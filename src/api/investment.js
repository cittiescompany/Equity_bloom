import http from "@/lib/http";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useGetInvestments = () => {
  return useQuery({
    queryKey: ["investments"],
    queryFn: async () => {
      // const response= await axios.get('http://localhost:5000/api/investment/investments')
      // return response.data
      // const response = await axios.get(
      //   "https://dashboard-backend-hazel-five.vercel.app/api/investment/investments"
      // );
      const response = await http.get(
        "/investments"
      );
      return response.data;
    },
  });
};

export const useCalculateCurrencyMutation = () => {
  return useMutation({
    queryKey: ["calculateCurrency"],
    mutationFn: async (payload) => {
      if (!payload) {
        return;
      }
      const { amount, from, to } = payload;
      try {
        const response = await axios.get(
          "https://dashboard-backend-hazel-five.vercel.app/api/get-rate",
          {
            params: { fromCountryCode: from, toCountryCode: to },
          }
        );
        console.log("response:", response);

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
    },
  });
};

export const useBuyShareMutation=()=>{
  const queryClient=useQueryClient()
  return useMutation({
    mutationFn:async(payload)=>{
      const response = await http.post('/investments/buy-shares',payload)
      return response.data
    },
    onSuccess:()=>{
queryClient.invalidateQueries({queryKey:['investments']})
queryClient.invalidateQueries({queryKey:['InvestorInvestments']})
    }
  })
}


export const useSingleGetInvestment = (id) => {
  return useQuery({
    queryKey: ["singleInvestment"],
    queryFn: async () => {
      const response = await http.get(
        `/investments/${id}`
      );
      return response.data;
    },
    enabled: !!id,
  });
};


export const useGetInvestorInvestments = () => {
  return useQuery({
    queryKey: ["InvestorInvestments"],
    queryFn: async () => {
      const response = await http.get(
        "/investments/buyer"
      );
      return response.data;
    },
  });
};