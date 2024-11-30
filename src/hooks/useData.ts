import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchRes<T> {
  count: number,
  results: T[]
}

const useData = <T>(endpoind:string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {

  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

    setIsLoading(true);
    setData([]);
    const controller = new AbortController();

    apiClient.get<FetchRes<T>>(endpoind, {signal: controller.signal, ...requestConfig})
      .then((res)=> {        
        // console.log(endpoind, res.data.results)
        setData(res.data.results)
        setIsLoading(false);
        setError("");
      })
      .catch((err)=> {        
        // console.log(endpoind, err.message)       
        if (err instanceof CanceledError) return
        setError(err.message);
        setIsLoading(false);         
      })
      // .finally(()=> setIsLoading(false))

    return () => controller.abort();

  }, deps ? [...deps] : [])

  return { data, error, isLoading }

}

export default useData


