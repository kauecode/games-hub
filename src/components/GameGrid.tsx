import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import React, { useContext, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useFetchError from '../hooks/useFetchError';
import { SystemAlertContext } from './SystemAlert';

const GameGrid = () => {

  const {data, error, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage} = useGames();
  const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12]

  const {dispatch: alertDispatcher} = useContext(SystemAlertContext);
  useFetchError({ error, alertDispatcher, info: "Games grid will not load", group: "GG"});
  useEffect(() => {
    if (data?.pages[0]?.count === 0) {
      alertDispatcher({
        type: "ADD", 
          alert: {
            alertType: "warning",
            id: Date.now(),
            group: "GG",
            message: "No Games Found!"
          }
        }
      )
    }    
  }, [data])

  if (data?.pages[0]?.count === 0) 
    return <Text p={5} fontWeight={"bold"}>No Games Found!</Text>

  const totalGamesFetched = data?.pages.reduce((acc, page) => acc + page.results.length , 0) || 0;

  return (
    <>      
    <InfiniteScroll 
      dataLength={totalGamesFetched} 
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner display={'block'} margin={'20px auto'} p={3}/>}>
      <SimpleGrid columns={{ sm:1, md:2, lg:3, xl:4 }} padding={5} spacing={5}>
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
    </InfiniteScroll>
    </>
  )
}

export default GameGrid