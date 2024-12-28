import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { AxiosError } from "axios";
import APIclient from "../services/api-client";
import { FetchRes, Game } from "../types/types";

const apiClient = new APIclient<Game>('/games')

const useGames = (gameQuery : GameQuery) => {

    const query = useInfiniteQuery<FetchRes<Game>, AxiosError>({
      queryKey: ['games', gameQuery],
      queryFn: ({ pageParam = 1}) => apiClient.getData({
        params: { 
          genres: gameQuery.selectedGenreId, 
          parent_platforms: gameQuery.selectedPlatformId,
          ordering: gameQuery.ordering,
          search: gameQuery.search,
          page: pageParam,
          page_size: 24
        }
      }),
      getNextPageParam: (lastPage, allPages) => lastPage.next ? allPages.length + 1 : undefined,
      staleTime: 24 * 60 * 60 * 1000, // 24 Hrs
      // initialData: { count: 0, results: [] }, // #Todo: Set this up
      keepPreviousData: true
    });  

    return query;

}

export default useGames;