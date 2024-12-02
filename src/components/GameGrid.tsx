import React, { useEffect, useState } from 'react'
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameAppError, GameQuery } from '../App';

interface GameGridProps {
  gameQuery : GameQuery,
  setError: ({} : GameAppError) => void
}

const GameGrid = ({gameQuery, setError} : GameGridProps) => {

  const {data, error, isLoading} = useGames(gameQuery);

  const skeletons = [1,2,3,4,5,6,7,8]

  useEffect(() => {
    if (error)
      setError({message: error, description: "Games grid will not load"})
  }, [error])

  return (
    <>
    <SimpleGrid columns={{ sm:1, md:2, lg:3, xl:4 }} padding={5} spacing={5}>
      {isLoading && skeletons.map((skel) => 
        <GameCardContainer key={skel}>
          <GameCardSkeleton />
        </GameCardContainer>
      )}      
      {data.map((game, i) =>
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      )}
    </SimpleGrid>
    </>
  )
}

export default GameGrid