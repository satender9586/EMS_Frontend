import axios from "axios"
import { getCookies, setCookies, clearCookies } from "@/utils/Cookies"
import { refreshTokenGenerateApi } from "../services/POST_API"
import { BASE_API_URL } from "./Constant"



export const instance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 5000,
  headers: { 'Content-Type': "application/json" }
})


instance.interceptors.request.use(
  async (config) => {
    const token = await getCookies("accessToken")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)


instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = await getCookies("refreshToken");
      
        if (!refreshToken) throw new Error("Missing refresh token");
        const tokenApi = await refreshTokenGenerateApi(refreshToken);
        const { accessToken, newRefreshToken } = tokenApi.data;
        await setCookies("accessToken", accessToken);
        await setCookies("refreshToken", newRefreshToken);
        instance.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
        return instance(originalRequest);

      } catch (tokenRefreshError) {
        console.error("Token refresh failed:", tokenRefreshError);
        await clearCookies("accessToken");
        await clearCookies("refreshToken");
        await clearCookies("auth");
        return Promise.reject(tokenRefreshError);
      }
    }

    return Promise.reject(error);
  }
);
