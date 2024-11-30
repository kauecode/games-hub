import useData from "./useData";
import { Genre } from "./useGenres";

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
  metacritic: number
}

const useGames = (genre : Genre | null) => {
  return useData<Game>('/games', {params: { genres: genre?.id }}, [genre?.id])
}

export default useGames;