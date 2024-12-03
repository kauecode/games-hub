import React from 'react'
import { Badge, Box } from '@chakra-ui/react';

interface GameCardProps {
  score: number
}

const GameScore = ({score} : GameCardProps) => {

  const scoreColor = (score:number) : string => {
    return score > 75 ? "green" : score > 50 ? "yellow" : "red"
  }

  if (score === 0 || score === null) return

  return (
    <Box rounded={5}>
      <Badge fontSize={16} py={0} px={2} fontWeight={'bold'} colorScheme={scoreColor(score)}>{score}</Badge>  
    </Box>
  )
}

export default GameScore