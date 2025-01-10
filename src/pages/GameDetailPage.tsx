import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { Image, Box, GridItem, Heading, Spinner, Text, Skeleton } from '@chakra-ui/react';
import useGame from '../hooks/useGame';
import useFetchError from '../hooks/useFetchError';
import { SystemAlertContext } from '../components/SystemAlert';

const GameDetailPage = () => {

  const params = useParams();

  const { data:gameData , error, isLoading } = useGame(params.slug!);

  const {dispatch: alertDispatcher} = useContext(SystemAlertContext);
  useFetchError({ error, alertDispatcher, info: "Game information will not load", group: "GP"});

  if (error) 
    return <Text height='400px' align='center'>Could not load game info.</Text>

  return (
    <>
      <GridItem  padding={5} as="main" area="main">
        {isLoading 
          ?
        <Skeleton
          width='100%'
          height='400px'
          rounded='3xl'/>
          :
        <Image 
          mb={5}
          width='100%'
          height='400px'
          fit='cover'
          // aspectRatio={4 / 3}
          rounded='3xl'
          src={gameData?.background_image} 
          alt={'Cover image for ' + gameData?.name}/>
        }
        <Heading pb={5} as={'h1'} size={{base: 'xl', lg: '3xl'}}>
          {gameData?.name}
        </Heading>
        {isLoading && <Box minHeight='70vh' textAlign='center'><Spinner size="lg"/></Box>}
        <Text>          
          {gameData?.description_raw}
        </Text>
      </GridItem>
    </>
  )
}

export default GameDetailPage