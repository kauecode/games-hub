import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";
import { FetchRes, Platform } from "../types/types";
import platformsInitialData from "../data/platforms"

const apiClient = new APIclient<Platform>('/platforms/lists/parents')

const usePlatforms = () => {

    const query = useQuery<FetchRes<Platform>, AxiosError>({
      queryKey: ['platforms'],
      queryFn: apiClient.getList,
      staleTime: 24 * 60 * 60 * 1000, // 24 Hrs
      initialData: platformsInitialData,
      keepPreviousData: true
    });  

    return query;
}

export default usePlatforms;