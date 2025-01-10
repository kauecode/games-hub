import { Show, GridItem, HStack, SkipNavContent, Grid } from '@chakra-ui/react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'

const HomePage = () => {
  return (
    <>
      <Grid 
        templateAreas={{ base: `"main"`, lg: `"aside main"` }}
        templateColumns={{ base: '1fr', lg: '200px 1fr' }}>        
        <Show above="lg">
          <GridItem as="aside" padding={5} area="aside">
            <GenreList/>
          </GridItem>
        </Show>
        <GridItem as="main" area="main">
          <GameHeading/>
          <HStack wrap={'wrap'} padding={5} spacing={5}>            
            <PlatformSelector/>
            <SortSelector/>
          </HStack>
          <SkipNavContent />
          <GameGrid/>
        </GridItem>          
      </Grid>  
    </>
  )
}

export default HomePage