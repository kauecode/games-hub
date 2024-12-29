import React, { useContext } from 'react'
import useGenres from '../hooks/useGenres';
import { HStack, List, ListItem, Image, Button, Heading } from '@chakra-ui/react';
import resizeImg from '../utils/image-resize';
import GenreListSkeleton from './GenreListSkeleton';
import { SystemAlertContext } from './SystemAlert';
import useFetchError from '../hooks/useFetchError';

interface GenreListProps {
  setGenre: (id:number) => void,
  selectedGenre?: number
}

const GenreList = ({setGenre, selectedGenre} : GenreListProps) => {

  const {data, error, isFetching} = useGenres();

  const {dispatch: alertDispatcher} = useContext(SystemAlertContext)

  useFetchError({ error, alertDispatcher, info: "Genre selection will not be available", group: "GL"});
  
  return (
    <>
      <Heading fontSize={'2xl'} pt={2} pb={2}>Genres</Heading>
      <List>
        {isFetching && <GenreListSkeleton numberOfItems={20} />}
        {data?.results.map((genre) => 
          <ListItem key={genre.id} paddingY={2}>
            <HStack>
              <Image alt='' role='presentation' objectFit='cover' boxSize={10} borderRadius={10} src={resizeImg(genre.image_background)}/>
              <Button 
                whiteSpace="normal" textAlign='left'
                fontWeight={selectedGenre === genre.id ? 'extrabold' : 'normal'}
                variant={'link'} fontSize={'lg'}
                onClick={() => setGenre(genre.id)}
                >
                {genre.name}
              </Button>
            </HStack>            
          </ListItem>
        )}
      </List>
    </> 
  )
}

export default GenreList