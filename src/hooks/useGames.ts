import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchGamesRes {
  count: number,
  results: Game[]
}

interface Game {
  id: number,
  name: string
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient.get<FetchGamesRes>('/games', {signal: controller.signal})
      .then((res) => {
        console.log(res.data.results)
        setGames(res.data.results)
      })
      .catch((err) => {
        console.log(err)
        if (err instanceof CanceledError) return
        setError(err.message)
      })

      return () => controller.abort();
  },[])

  return {games, error}
}

export default useGames;