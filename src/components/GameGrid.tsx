import { useEffect } from 'react'
import { Button, SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameAppError, GameQuery } from '../App';
import React from 'react';

interface GameGridProps {
  gameQuery : GameQuery,
  setError: ({} : GameAppError) => void
}

const GameGrid = ({gameQuery, setError} : GameGridProps) => {

  const {data, error, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage} = useGames(gameQuery);
  const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12]

  useEffect(() => {
    if (error)
      setError({message: error.message, description: "Games grid will not load"})
  }, [error])

  if (data?.pages[0]?.count === 0) return <Text p={5} fontWeight={"bold"}>No Games Found!</Text>

  return (
    <>
    <SimpleGrid columns={{ sm:1, md:2, lg:3, xl:4, xxl: 5, xxxl: 6 }} padding={5} spacing={5}>
      {isFetching && skeletons.map((skel) => 
        <GameCardContainer key={skel}>
          <GameCardSkeleton />
        </GameCardContainer>
      )}      
      {data?.pages.map((page, i) => 
        <React.Fragment key={i}>
          {page.results.map((game) => 
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>          
          )}          
        </React.Fragment>
      )}
    </SimpleGrid>
    {hasNextPage && 
    <Button ml={5} mt={5} onClick={() => fetchNextPage()}>
        {isFetchingNextPage ? "Loading..." : "Load More"} 
    </Button>}
    </>
  )
}

export default GameGrid