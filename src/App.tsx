import { Grid, GridItem, HStack, Show, SkipNavContent, SkipNavLink } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'
import Footer from './components/Footer'
import SystemAlert, { SystemAlertProvider } from './components/SystemAlert'

export interface GameQuery {
  selectedGenreId?: number,
  selectedPlatformId?: number,
  ordering: string | null, // #TODO: look into this.
  search: string,
}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  
  return (
    <>    
    <SystemAlertProvider>
    <SkipNavLink>Skip to content</SkipNavLink>
    <SystemAlert/>
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
              setGenre={(id:number) => setGameQuery({...gameQuery, selectedGenreId: id})} 
              selectedGenre={gameQuery.selectedGenreId}/>
          </GridItem>
        </Show>
        <GridItem as="main" area="main">
          <GameHeading gameQuery={gameQuery}/>
          <HStack padding={5} spacing={5}>            
            <PlatformSelector 
              setSelectedPlatform={(id:number | undefined) => setGameQuery({...gameQuery, selectedPlatformId: id})} 
              selectedPlatformId={gameQuery.selectedPlatformId} />
            <SortSelector selectedOrder={gameQuery.ordering} sortOrder={(ordering) => setGameQuery({...gameQuery, ordering })} />
          </HStack>
          <SkipNavContent />
          <GameGrid
            gameQuery={gameQuery} />
        </GridItem>
        <GridItem area="footer">
          <Footer />
        </GridItem>        
      </Grid>    
      </SystemAlertProvider>
    </>
  )
}

export default App
