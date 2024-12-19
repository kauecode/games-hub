import { Grid, GridItem, HStack, Show, SkipNavContent, SkipNavLink } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'
import SystemAlert from './components/SystemAlert'
import Footer from './components/Footer'

export interface GameQuery {
  selectedGenreId?: number,
  selectedPlatformId?: number,
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
    <SkipNavLink>Skip to content</SkipNavLink>
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
          <GridItem as="aside" padding={5} area="aside">
            <GenreList 
              setError={(errorObj) => setGlobalError([...globalError, errorObj])} 
              setGenre={(id:number) => setGameQuery({...gameQuery, selectedGenreId: id})} 
              selectedGenre={gameQuery.selectedGenreId}/>
          </GridItem>
        </Show>
        <GridItem as="main" area="main">
          <GameHeading gameQuery={gameQuery}/>
          <HStack padding={5} spacing={5}>            
            <PlatformSelector 
              setError={(errorObj) => setGlobalError([...globalError, errorObj])} 
              setSelectedPlatform={(id:number | undefined) => setGameQuery({...gameQuery, selectedPlatformId: id})} 
              selectedPlatformId={gameQuery.selectedPlatformId} />
            <SortSelector selectedOrder={gameQuery.ordering} sortOrder={(ordering) => setGameQuery({...gameQuery, ordering })} />
          </HStack>
          <SkipNavContent />
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
