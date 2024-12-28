import axios, { AxiosRequestConfig } from "axios";
import { FetchRes } from "../types/types";

const apiKey = import.meta.env.VITE_RAWG_API_KEY

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: apiKey
  }
})

class APIclient<T> {
  endpoint: string
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getData = (config?:AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchRes<T>>(this.endpoint, config)
      .then(res => res.data)    
  }
}

export default APIclient;