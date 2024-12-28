import { Genre } from "../types/types";
import useGenres from "./useGenres";

const useGenre = (id:number | undefined):Genre | undefined => {
  const { data } = useGenres();
  return (data?.results.find((genre) => genre.id === id) || undefined)
}

export default useGenre