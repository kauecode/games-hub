import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import APIclient from "../services/api-client";
import { FetchRes, Platform } from "../types/types";

const apiClient = new APIclient<Platform>('/platforms/lists/parents')

const usePlatforms = () => {

    const query = useQuery<FetchRes<Platform>, AxiosError>({
      queryKey: ['platformssss'],
      queryFn: apiClient.getData,
      staleTime: 24 * 60 * 60 * 1000, // 24 Hrs
      // initialData: { count: 0, results: [] }, // #Todo: Set this up
      keepPreviousData: true
    });  

    return query;
}

export default usePlatforms;