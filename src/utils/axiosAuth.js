import axios from "axios";

export const axiosAuth = () => {
  const token = localStorage.getItem("jwt");
  return axios.create({
    baseURL: "https://be.citrics.io/api",
    headers: {
      authorization: token,
    },
  });
};
