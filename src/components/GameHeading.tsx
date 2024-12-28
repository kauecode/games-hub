import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import usePlatforms from '../hooks/usePlatforms'
import useGenre from '../hooks/useGenre'
import usePlatform from '../hooks/usePlatform'

interface GameHeadingProps {
  gameQuery: GameQuery
}

const GameHeading = ( { gameQuery } : GameHeadingProps ) => {

  const selectedGenre = useGenre(gameQuery.selectedGenreId)
  const selectedPlatform = usePlatform(gameQuery.selectedPlatformId)
  
  const heading = 
    (gameQuery.search ? `Results for "${gameQuery.search}" in ` : "")
    + `${(selectedPlatform?.name || "")} ${(selectedGenre?.name || "")} Games`

  return (
    <Heading paddingLeft={5} paddingTop={5} as={'h1'}>{heading}</Heading>
  )
}

export default GameHeading