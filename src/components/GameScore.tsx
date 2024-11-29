import React from 'react'
import { Badge } from '@chakra-ui/react';

interface GameCardProps {
  score: number
}

const GameScore = ({score} : GameCardProps) => {

  const scoreColor = (score:number) : string => {
    return score > 75 ? "green" : score > 50 ? "yellow" : "red"
  }

  return (
    <Badge fontSize={14} fontWeight={'bold'} colorScheme={scoreColor(score)}>{score}</Badge>
  )
}

export default GameScore