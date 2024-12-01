import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import GameScore from './GameScore'
import ImageNotFound from '../../public/image-not-found.png'
import resizeImg from '../utils/image-resize'

interface GameCardProps {
  game: Game
}

const GameCard = ({ game } : GameCardProps) => {

  // console.log(game.parent_platforms);

  return (
    <Card>
      <Image
        src={resizeImg(game.background_image)} 
        height="180px"
        objectFit="cover" 
        fallbackSrc={ImageNotFound}
        alt={'Game Card Image for ' + game.name}/>
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