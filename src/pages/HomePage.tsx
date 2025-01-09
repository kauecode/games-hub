import { Show, GridItem, HStack, SkipNavContent } from '@chakra-ui/react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'

const HomePage = () => {
  return (
    <>
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
    </>
  )
}

export default HomePage