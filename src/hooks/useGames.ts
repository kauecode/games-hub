import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchGamesRes {
  count: number,
  results: Game[]
}

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

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();    
    apiClient.get<FetchGamesRes>('/games', {signal: controller.signal})
      .then((res) => {
        console.log(res.data.results)
        setGames(res.data.results)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        if (err instanceof CanceledError) return
        setError(err.message)
        setIsLoading(false)
      })
      // .finally(() => setIsLoading(false))
      return () => controller.abort();
  },[])

  return {games, error, isLoading}
}

export default useGames;