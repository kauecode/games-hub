import { GameQuery } from "../App";
import useData from "./useData";

export interface Platforms {
  id: number,
  name: string,
  slug: string
}

export interface Game {
  id: number,
  name: string,
  slug: string,
  background_image: string,
  parent_platforms: { platform: Platforms }[],
  metacritic: number,
  rating_top: number
}

const useGames = (
  gameQuery : GameQuery
) => {
  return useData<Game>('/games',
    { params: { 
      genres: gameQuery.genre?.id, 
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.ordering,
      search: gameQuery.search,
      page: 1,
      page_size: 24
    }},
    [gameQuery])
}

export default useGames;