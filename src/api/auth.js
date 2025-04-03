import { useMutation, useQuery } from "@tanstack/react-query";
import http from "@/lib/http";

export const useSignupMutation=()=>{
  return useMutation({
    mutationFn:(body)=>{
      return http.post('/auth/register',body)
    }
  })
}
export const useLoginMutation=()=>{
  return useMutation({
    mutationFn:(body)=>{
      return http.post('/auth/login',body)
    }
  })
}

export const useGetProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      return await http.get("/auth/profile");
    },
    enabled: false,
    retry: false,
  });
};