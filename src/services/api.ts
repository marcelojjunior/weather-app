import axios from "axios";

const api = axios.create({
  baseURL: "https://api.weatherapi.com/v1/",
  timeout: 5000,
  params: {
    key: "9b1a1848466d4788a2e232917251208",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default api;