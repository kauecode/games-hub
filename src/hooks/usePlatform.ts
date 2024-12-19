import { Platform } from "../types/types";
import usePlatforms from "./usePlatforms";

const usePlatform = (id:number | undefined): Platform | undefined => {
  const { data } = usePlatforms();
  return (data?.results.find((platform) => platform.id === id) || undefined)
}

export default usePlatform