import axios from "axios"

export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 10000,
    headers: { 'Content-Type': "applicaiton/json" }
})


// Add a request interceptor
instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
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

