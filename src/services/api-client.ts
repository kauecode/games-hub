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

  getList = (config?:AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchRes<T>>(this.endpoint, config)
      .then(res => res.data)    
  }

  getObj = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + '/' + id)
      .then(res => res.data)    
  }

}

export default APIclient;