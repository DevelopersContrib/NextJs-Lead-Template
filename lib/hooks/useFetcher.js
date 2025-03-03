import axios from "axios";
import { ENV_VAR, getEnvVar } from "@/lib/getEnvVar";

const baseURL = getEnvVar(ENV_VAR.API_URL);

export const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized: Logging out...");
    }
    return Promise.reject(error);
  }
);

const request = async (method, url, payload, config = {}) => {
  try {
    const response = await axiosInstance({ method, url, data: payload, ...config });

    if (response.status === 200 || response.status === 201) {
      return response.data;
    }

    throw new Error(response.statusText);
  } catch (error) {
    console.error(`${method} request error:`, error);
    throw error;
  }
};

export const fetcher = (url, payload, config = {}) =>
  request(payload ? "POST" : "GET", url, payload, config);

export const apiFetcher = async (method, url, payload, config = {}) => {
  try {
    const response = await axios({
      method,
      url: "/api/fetcher",
      data: method !== "GET" ? { url, payload, config } : undefined,
      params: method === "GET" ? { url, config: JSON.stringify(config || {}) } : undefined,
    });
    return response.data;
  } catch (error) {
    console.error("Error in frontend fetcher:", error);
    throw error;
  }
};
