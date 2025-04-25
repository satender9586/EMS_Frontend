import axios from "axios"
import { getAuthToken } from "@/utils/cookies"

const API_URL = process.env.NEXT_DEVELOPMENT_API_URL




export const instance = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    timeout: 10000,
    headers: { 'Content-Type': "application/json" }
})



// Add a request interceptor
instance.interceptors.request.use((config) => {

    // if (token) {
    //     config.headers.Authorization = `Bearer ${token}`
    // }
    return config
},
    (error) => {
        // handle the error
        return Promise.reject(error)
    }
)

// Add a response interceptor

instance.interceptors.response.use(function (response) {
    return response;
}, (error) => {
    // Handle the response error
    if (error.response && error.response.status === 401) {
        // Handle unauthorized error
        console.error('Unauthorized, logging out...');
        // Perform any logout actions or redirect to login page
    }
    return Promise.reject(error);

})

