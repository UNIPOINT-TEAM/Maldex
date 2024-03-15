export const URL = "http://5.35.82.80:8000";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com",
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
