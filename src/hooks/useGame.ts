import { FullGame } from "../types/types"
import APIclient from "../services/api-client"
import { useQuery } from "@tanstack/react-query"
import { AxiosError } from "axios"

const apiClient = new APIclient<FullGame>("games")

const useGame = (id:string) => {

  const query = useQuery<FullGame, AxiosError>({
    queryKey: ['game-' + id],
    queryFn: () => apiClient.getObj(id),
    staleTime: 24 * 60 * 60 * 1000
  })

  return query;

}

export default useGame;