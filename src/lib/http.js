import axios from "axios";
import { getCookie } from "@/lib/utils";
console.log(process.env.NEXT_PUBLIC_BASE_URL)
const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

http.interceptors.request.use((config) => {
    const { intercept = true } = config;
    if (!intercept) return config;
    const token = getCookie("loginToken");
    // console.log(token)
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});


export default http;