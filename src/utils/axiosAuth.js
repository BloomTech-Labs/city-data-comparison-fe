import axios from "axios";

export const axiosAuth = () => {
  const token = localStorage.getItem("jwt");
  return axios.create({
    baseURL: "https://citrics-backend-web.herokuapp.com/api",
    headers: {
      authorization: token,
    },
  });
};
