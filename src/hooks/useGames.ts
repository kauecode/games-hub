import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { AxiosError } from "axios";
import APIclient from "../services/api-client";
import { FetchRes, Game } from "../types/types";

const apiClient = new APIclient<Game>('/games')

const useGames = (gameQuery : GameQuery) => {

    console.log("Called");

    const params = { 
      genres: gameQuery.genre?.id, 
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.ordering,
      search: gameQuery.search,
      page: 1,
      page_size: 24
    }

    const query = useQuery<FetchRes<Game>, AxiosError>({
      queryKey: ['games', params],
      queryFn: () => apiClient.getData({params}),
      staleTime: 24 * 60 * 60 * 1000, // 24 Hrs
      // initialData: { count: 0, results: [] }, // #Todo: Set this up
      keepPreviousData: true
    });  

    return query;

}

export default useGames;