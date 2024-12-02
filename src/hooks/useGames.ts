import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Platforms {
  id: number,
  name: string,
  slug: string
}

export interface Game {
  id: number,
  name: string,
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
      search: gameQuery.search
    }},
    [gameQuery])
}

export default useGames;