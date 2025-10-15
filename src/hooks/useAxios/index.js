import axios from "axios";

export const useAxios = () => {
  const request = ({ url, method = "GET", body, params }) => {
    return axios({
      url: `${import.meta.env.VITE_BASE_URL}/${url}`,
      method,
      params,
      data: body,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res)
      .catch((error) => console.log(error));
  };
  return request;
};
