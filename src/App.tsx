import './App.css'
import { Button, ButtonGroup, Grid, GridItem, Show, Stack } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import { Platform } from './hooks/usePlatforms'
import PlatformSelector from './components/PlatformSelector'

function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

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
            <GenreList setGenre={setSelectedGenre} selectedGenre={selectedGenre}/>
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector setSelectedPlatform={setSelectedPlatform} selectedPlatform={selectedPlatform} />
          <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
