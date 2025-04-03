import http from "@/lib/http";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useGetProperties = () => {
  return useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const response = await http.get(
        "/properties"
      );
      return response.data;
    },
  });
};



export const useBuyPropertyMutation=()=>{
  const queryClient=useQueryClient()
  return useMutation({
    mutationFn:async(payload)=>{
      console.log('payload:', payload);
      
      const response = await http.post('/properties/buy-property',payload)
      return response.data
    },
    onSuccess:()=>{
queryClient.invalidateQueries({queryKey:['properties']})
queryClient.invalidateQueries({queryKey:['buyerProperties']})
    }
  })
}


export const useGetSingleProperty = (id) => {
  return useQuery({
    queryKey: ["singleProperty"],
    queryFn: async () => {
      const response = await http.get(
        `/properties/${id}`
      );
      return response.data;
    },
    enabled: !!id,
  });
};


export const useGetBuyerProperties = () => {
  return useQuery({
    queryKey: ["buyerProperties"],
    queryFn: async () => {
      const response = await http.get(
        "/properties/buyer"
      );
      return response.data;
    },
  });
};