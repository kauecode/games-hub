import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

export interface GameQuery {
  selectedGenreId?: number,
  selectedPlatformId?: number,
  selectedSortOrder?: string,
  searchString?: string,
}

interface QueryStore { 
  gameQuery: GameQuery,
  setGenreId: (id:number) => void,
  setPlatformId: (id?:number) => void,
  setSortOrder: (s?:string) => void,
  setSearchString: (s:string) => void
}
// Using optional? params so filters can be reset to "undefined" from setters.

const useQueryStore = create<QueryStore>(set => ({
  gameQuery: {},
  setSearchString: (s) => set( 
    store => ({ gameQuery: {...store.gameQuery, searchString: s} }) 
  ),
  setGenreId: (id) => set( 
    store => ({ gameQuery: {...store.gameQuery, selectedGenreId: id} }) 
  ),
  setPlatformId: (id) => set( 
    store => ({ gameQuery: {...store.gameQuery, selectedPlatformId: id} }) 
  ),
  setSortOrder: (s) => set( 
    store => ({ gameQuery: {...store.gameQuery, selectedSortOrder: s} }) 
  )
}))

if (process.env.NODE_ENV === 'development')
  mountStoreDevtool('Query Store', useQueryStore)

export default useQueryStore;