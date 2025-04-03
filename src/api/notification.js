import http from "@/lib/http";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetNotification = () => {
    return useQuery({
      queryKey: ["notifications"],
      queryFn: () => {
        return http.get("/user/notifications");
      },
    });
  };

  export const useDeleteMutation = () => {
    const queryClient=useQueryClient()
    return useMutation({
      mutationFn: (id) => {
       return http.delete(`/user/notifications/${id}`)
      },
onSuccess:()=>{
    queryClient.invalidateQueries({queryKey: ["notifications"]})
}
    });
  }