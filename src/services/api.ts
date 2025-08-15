import axios from "axios";

const api = axios.create({
  baseURL: "https://api.weatherapi.com/v1/",
  timeout: 5000,
  params: {
    key: YOUR_KEY,
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default api;