import './App.css'
import { Button, ButtonGroup, Grid, GridItem, Show, Stack } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import { Platform } from './hooks/usePlatforms'
import PlatformSelector from './components/PlatformSelector'

export interface GameQuery {
  genre: Genre | null,
  platform: Platform | null
}

function App() {

  // Query Obj Pattern
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
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem padding={5} area="aside">
            <GenreList setGenre={(g:Genre) => setGameQuery({...gameQuery, genre: g})} selectedGenre={gameQuery.genre}/>
            {/* Could use short hand here and let TS infer the type: */}
            {/* (genre) => setGameQuery({...gameQuery, genre}) */}            
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector setSelectedPlatform={(p:Platform) => setGameQuery({...gameQuery, platform: p})} selectedPlatform={gameQuery.platform} />
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
