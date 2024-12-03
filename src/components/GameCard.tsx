import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, Text, CardBody, Heading, HStack, Image, Link, textDecoration } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import GameScore from './GameScore'
import ImageNotFound from '../../public/image-not-found.png'
import resizeImg from '../utils/image-resize'
import Emojis from './Emojis'
import { motion, AnimatePresence } from "framer-motion";
import { RxOpenInNewWindow } from "react-icons/rx";


interface GameCardProps {
  game: Game
}

const MotionCard = motion(Card); // for Chakra components

const GameCard = ({ game } : GameCardProps) => {

  return (
    <MotionCard as={Link}
      isExternal
      aria-label={`Visit ${game.name} on RAWG (opens in a new tab)`}
      href={'https://rawg.io/games/'}
      _hover={{textDecoration: 'none'}}
      whileHover={{
        scale: 1.02
      }}
      whileTap={{
        scale: 0.98
      }}
      transition={{ 
        duration: 0.3,
        type: "spring",
        damping: 25,
        stiffness: 500
      }}
      // key={game}    
      overflow='hidden' 
      width='100%'
      variant={'filled'}>
      <Image
        src={resizeImg(game.background_image)} 
        height="180px"
        objectFit="cover" 
        fallbackSrc={ImageNotFound}
        alt={'Game Card Image for ' + game.name}/>
      <CardBody pb={16}>
      {game.parent_platforms &&
        <PlatformIconList platforms={game.parent_platforms.map(platform => platform.platform)} />}          
        <Heading mt={2} fontSize={'2xl'}>{game.name} <Emojis rating={game.rating_top} /></Heading> 

        <HStack justifyContent="space-between" position='absolute' p={5}  bottom={0} left={0} width='100%'>
          <Text>Gamescore: </Text>
          <GameScore score={game.metacritic} />          
        </HStack>
      </CardBody>
    </MotionCard>
  )
}

export default GameCard