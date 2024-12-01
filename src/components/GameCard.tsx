import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import GameScore from './GameScore'
import resizeImg from '../utils/image-url'

interface GameCardProps {
  game: Game
}

const GameCard = ({ game } : GameCardProps) => {

  // console.log(game.parent_platforms);

  return (
    <Card>
      {game.background_image && <Image src={resizeImg(game.background_image)}/>}
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList platforms={game.parent_platforms.map(platform => platform.platform)} />
          <GameScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard