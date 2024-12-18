import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";
import { FetchRes, Genre } from "../types/types";

const apiClient = new APIclient<Genre>('/genres');

const useGenres = () => { 
    
    const query = useQuery<FetchRes<Genre>, AxiosError>({
      queryKey: ['genressss'],
      queryFn: apiClient.getData,
      staleTime: 24 * 60 * 60 * 1000, // 24 Hrs
      // initialData: { count: 0, results: [] }, // #Todo: Set this up
      keepPreviousData: true
    });  

    return query;
}

export default useGenres

