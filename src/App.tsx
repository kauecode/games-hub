import './App.css'
import { Button, ButtonGroup, Grid, GridItem, HStack, Show, Stack } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import { Platform } from './hooks/usePlatforms'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'

export interface GameQuery {
  genre: Genre | null,
  platform: Platform | null,
  ordering: string | null, // #Todo: look into this.
  search: string,
}

function App() {

  // #Todo: Query Obj Pattern, need to put this in a context/reducer later
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <>
      <Grid 
      templateAreas={{        
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`        
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
      >
        <GridItem area="nav">
          <NavBar gameQuery={gameQuery} onSearch={(s:string) => setGameQuery({...gameQuery, search: s})} />
        </GridItem>
        <Show above="lg">
          <GridItem padding={5} area="aside">
            <GenreList setGenre={(g:Genre) => setGameQuery({...gameQuery, genre: g})} selectedGenre={gameQuery.genre}/>
            {/* Could use short hand here and let TS infer the type: */}
            {/* (genre) => setGameQuery({...gameQuery, genre}) */}                        
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameHeading gameQuery={gameQuery}/>
          <HStack padding={5} spacing={5}>            
            <PlatformSelector setSelectedPlatform={(p:Platform) => setGameQuery({...gameQuery, platform: p})} selectedPlatform={gameQuery.platform} />
            <SortSelector selectedOrder={gameQuery.ordering} sortOrder={(ordering) => setGameQuery({...gameQuery, ordering })} />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
