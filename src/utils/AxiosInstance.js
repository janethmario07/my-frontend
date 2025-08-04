import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://my-backend-55fe.onrender.com",

  headers: {
    "Content-Type": "application/json",
  },

  withCredentials: true,
});

// for form data for file input 
export const axiosInstance2 = axios.create({
  baseURL: "https://my-backend-55fe.onrender.com",

  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance2.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
