import { use } from "react";
import { useAxios } from "../useAxios";
import { useQuery } from "@tanstack/react-query";

export const useQueryHandler = ({ pathname, url }) => {
  const axios = useAxios();
  return useQuery({
    queryKey: [pathname],
    queryFn:()=> axios({ url }).then((res) => res.data),
  });
};
