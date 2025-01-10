export interface Game {
  id: number,
  name: string,
  slug: string,
  background_image: string,
  parent_platforms: { platform: Platform }[],
  metacritic: number,
  rating_top: number,
}

export interface FullGame extends Game {
  description: string,
  description_raw: string
}

export interface Platform {
  id: number,
  name: string,
  slug: string
}

export interface Genre {
  id: number,
  name: string,
  slug: string,
  image_background: string
}

export interface FetchRes<T> {
  count: number,
  results: T[],
  next: string | null,
  previous: string | null
}