import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import GameScore from './GameScore'
import ImageNotFound from '../../public/image-not-found.png'
import resizeImg from '../utils/image-resize'
import Emojis from './Emojis'

interface GameCardProps {
  game: Game
}

const GameCard = ({ game } : GameCardProps) => {

  return (
    <Card overflow='hidden' variant={'filled'}>
      <Image
        src={resizeImg(game.background_image)} 
        height="180px"
        objectFit="cover" 
        fallbackSrc={ImageNotFound}
        alt={'Game Card Image for ' + game.name}/>
      <CardBody>
        <HStack justifyContent="space-between">
          {game.parent_platforms &&
            <PlatformIconList platforms={game.parent_platforms.map(platform => platform.platform)} />}
          <GameScore score={game.metacritic} />
        </HStack>        
        <Heading paddingY={5} fontSize={'2xl'}>{game.name}</Heading>          
        <Emojis rating={game.rating_top} />
      </CardBody>
    </Card>
  )
}

export default GameCard