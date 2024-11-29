import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios";

interface FetchGenreRes {
  count: number,
  results: Genres[]
}

interface Genres {
  id: number,
  name: string,
  slug: string,
  image_background: string
}

const useGenres = () => {

  const [genreList, setGenreList] = useState<Genres[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();
    apiClient.get<FetchGenreRes>("/genres", {signal: controller.signal})
      .then((res)=> {
        console.log(res.data.results)
        setGenreList(res.data.results)
      })
      .catch((err)=> {
        console.log(err.message)        
        if (err instanceof CanceledError) return
      })

    return () => controller.abort();

  },[])

  return { genreList, error, isLoading }

}

export default useGenres


