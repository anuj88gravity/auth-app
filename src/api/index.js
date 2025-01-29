import axios from "axios";

//base url 
export const API = axios.create({
    baseURL: 'https://dummyjson.com/',
})