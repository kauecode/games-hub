import { useInfiniteQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import APIclient from "../services/api-client";
import { FetchRes, Game } from "../types/types";
import useQueryStore from "../stores/queryStore";

const apiClient = new APIclient<Game>('/games')

const useGames = () => {

    const gameQuery = useQueryStore(s => s.gameQuery);

    const query = useInfiniteQuery<FetchRes<Game>, AxiosError>({
      queryKey: ['games', gameQuery],
      queryFn: ({ pageParam = 1}) => apiClient.getList({
        params: { 
          genres: gameQuery.selectedGenreId, 
          parent_platforms: gameQuery.selectedPlatformId,
          ordering: gameQuery.selectedSortOrder,
          search: gameQuery.searchString,
          page: pageParam,
          page_size: 24
        }
      }),
      getNextPageParam: (lastPage, allPages) => lastPage.next ? allPages.length + 1 : undefined,
      staleTime: 24 * 60 * 60 * 1000, // 24 Hrs
      // initialData: { count: 0, results: [] }, // #Todo: Set this up as a fallback?
      keepPreviousData: true
    });  

    return query;

}

export default useGames;