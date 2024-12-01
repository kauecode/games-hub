import useData from "./useData";

export interface Platform {
  id: number,
  name: string,
  slug: string,
  image_background: string,
  description: string,
  image: string
}

const usePlatforms = () => {

  return useData<Platform>("/platforms/lists/parents");

}

export default usePlatforms;