import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import { Platform } from '../hooks/usePlatforms';

interface GameHeadingProps {
  gameQuery: GameQuery
}

const GameHeading = ( { gameQuery } : GameHeadingProps ) => {

  const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`

  //#TODO : Account for search string

  return (
    <Heading paddingLeft={5} paddingTop={5} as={'h1'}>{heading}</Heading>
  )
}

export default GameHeading