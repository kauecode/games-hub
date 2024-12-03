import './App.css'
import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import { Platform } from './hooks/usePlatforms'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'
import SystemAlert from './components/SystemAlert'
import Footer from './components/Footer'

export interface GameQuery {
  genre: Genre | null,
  platform: Platform | null,
  ordering: string | null, // #TODO: look into this.
  search: string,
}

export interface GameAppError {
  message: string,
  description?: string
}

function App() {

  // #TODO: Query Obj Pattern, need to put this in a context/reducer later...
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  const [globalError, setGlobalError] = useState<GameAppError[]>([])

  return (
    <>
    {globalError.length > 0 && <SystemAlert errorList={globalError} />}
      <Grid 
      templateAreas={{        
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`        
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
            <GenreList 
              setError={(errorObj) => setGlobalError([...globalError, errorObj])} 
              setGenre={(g:Genre) => setGameQuery({...gameQuery, genre: g})} 
              selectedGenre={gameQuery.genre}/>
            {/* #THOUGHTS: */}
            {/* Could use short hand here and let TS infer the type: */}
            {/* (genre) => setGameQuery({...gameQuery, genre}) */}
            {/* Not sure what I prefer, decide later */}
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameHeading gameQuery={gameQuery}/>
          <HStack padding={5} spacing={5}>            
            <PlatformSelector 
              setError={(errorObj) => setGlobalError([...globalError, errorObj])} 
              setSelectedPlatform={(p:Platform | null) => setGameQuery({...gameQuery, platform: p})} 
              selectedPlatform={gameQuery.platform} />
            <SortSelector selectedOrder={gameQuery.ordering} sortOrder={(ordering) => setGameQuery({...gameQuery, ordering })} />
          </HStack>
          <GameGrid
            setError={(errorObj) => setGlobalError([...globalError, errorObj])} 
            gameQuery={gameQuery} />
        </GridItem>
        <GridItem area="footer">
          <Footer />
        </GridItem>        
      </Grid>
    </>
  )
}

export default App
