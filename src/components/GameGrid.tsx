import React, { useEffect, useState } from 'react'
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {

  const {games, error, isLoading} = useGames();

  const skeletons = [1,2,3,4,5,6,7,8,9]

  return (
    <>
    {error && 
      <Text>{error}</Text>
    }    
    <SimpleGrid columns={{ sm:1, md:2, lg:3, xl:5 }} padding={10} spacing={10}>
      {isLoading && skeletons.map((skel) => 
        <GameCardContainer key={skel}>
          <GameCardSkeleton />
        </GameCardContainer>
      )}      
      {games.map((game, i) =>
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      )}
    </SimpleGrid>
    </>
  )
}

export default GameGrid