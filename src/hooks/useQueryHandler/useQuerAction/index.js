import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../useAxios";

export const useAddProductMutation = () => {
  const axios = useAxios();
  return useMutation({
    mutationFn: (body) =>
      axios({ url: "product", body, method: "POST" }).then((res) => res.data),
    onSuccess: (data) => {
      console.log(data.title + " qushildi");
    },
  });
};
