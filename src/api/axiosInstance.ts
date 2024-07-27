import { getToken } from '../lib/token'
import axios from "axios"

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
})

axiosInstance.interceptors.request.use(
  (config: any) => {
    const token = getToken("userToken")

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    } else {
      if (!config.headers["Content-Type"]) {
        config.headers["Content-Type"] = "application/json";
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);
export default axiosInstance
