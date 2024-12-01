import React, { useEffect, useState } from 'react'
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';
import { Platform } from '../hooks/usePlatforms';

interface GameGridProps {
  selectedGenre : Genre | null,
  selectedPlatform : Platform | null,
}

const GameGrid = ({selectedGenre, selectedPlatform } : GameGridProps) => {

  const {data, error, isLoading} = useGames(selectedGenre, selectedPlatform);

  const skeletons = [1,2,3,4,5,6,7,8]

  return (
    <>
    {error && 
      <Text>{error}</Text>
    }    
    <SimpleGrid columns={{ sm:1, md:2, lg:3, xl:4 }} padding={10} spacing={5}>
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