import { Grid, GridItem, HStack, Show, SkipNavContent, SkipNavLink } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'
import Footer from './components/Footer'
import SystemAlert, { SystemAlertProvider } from './components/SystemAlert'

function App() {

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
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem as="aside" padding={5} area="aside">
            <GenreList/>
          </GridItem>
        </Show>
        <GridItem as="main" area="main">
          <GameHeading/>
          <HStack padding={5} spacing={5}>            
            <PlatformSelector/>
            <SortSelector/>
          </HStack>
          <SkipNavContent />
          <GameGrid/>
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
