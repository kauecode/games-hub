import { Card, Text, CardBody, Heading, HStack, Image, Link, textDecoration, VisuallyHidden } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import GameScore from './GameScore'
import ImageNotFound from '../../public/image-not-found.png'
import resizeImg from '../utils/image-resize'
import Emojis from './Emojis'
import { motion } from "framer-motion";
import { Game } from '../types/types'
import { Link as RouterLink } from 'react-router-dom'

interface GameCardProps {
  game: Game
}

const MotionCard = motion(Card); // for Chakra components

const GameCard = ({ game } : GameCardProps) => {

  return (
    <MotionCard as={RouterLink}
      to={'game/' + game.slug}
      _hover={{textDecoration: 'none'}}
      overflow='hidden' 
      width='100%'      
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        duration: 0.3,
        type: "spring",
        damping: 25,
        stiffness: 500
      }}
      // key={game}    
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