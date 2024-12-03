import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface GameHeadingProps {
  gameQuery: GameQuery
}

const GameHeading = ( { gameQuery } : GameHeadingProps ) => {

  const heading = 
    (gameQuery.search ? `Results for "${gameQuery.search}" in ` : "")
    + `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`

  return (
    <Heading paddingLeft={5} paddingTop={5} as={'h1'}>{heading}</Heading>
  )
}

export default GameHeading