import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";
import { FetchRes, Genre } from "../types/types";
import genreInitialData from "../data/genres"

const apiClient = new APIclient<Genre>('/genres');

const useGenres = () => { 
    
    const query = useQuery<FetchRes<Genre>, AxiosError>({
      queryKey: ['genres'],
      queryFn: apiClient.getList,
      staleTime: 24 * 60 * 60 * 1000, // 24 Hrs
      initialData: genreInitialData,
      keepPreviousData: true
    });  

    return query;
}

export default useGenres

