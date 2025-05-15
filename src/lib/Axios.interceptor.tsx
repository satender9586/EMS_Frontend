import axios from "axios"
import { getToken, setToken, deleteToken } from "@/utils/cookies"
import { refreshTokenGenerateApi } from "../services/POST_API"

export const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  timeout: 10000,
  headers: { 'Content-Type': "application/json" }
})


instance.interceptors.request.use(
  async (config) => {
    const token = await getToken("accessToken")
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
        const refreshToken = await getToken("refreshToken");
        if (!refreshToken) throw new Error("Missing refresh token");

        const tokenApi = await refreshTokenGenerateApi(refreshToken);

        const { accessToken, newRefreshToken } = tokenApi.data;


        await setToken("accessToken", accessToken);
        await setToken("refreshToken", newRefreshToken);

     
        instance.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

        return instance(originalRequest);

      } catch (tokenRefreshError) {
        console.error("Token refresh failed:", tokenRefreshError);
        await deleteToken("accessToken");
        await deleteToken("refreshToken");
        window.location.href = '/';
        return Promise.reject(tokenRefreshError);
      }
    }

    return Promise.reject(error);
  }
);
