import React, { useEffect } from 'react'
import useGenres from '../hooks/useGenres';
import { HStack, List, ListItem, Image, Text, Spinner, Button, Heading } from '@chakra-ui/react';
import resizeImg from '../utils/image-resize';
import { GameAppError } from '../App';
import GenreListSkeleton from './GenreListSkeleton';
import { Genre } from '../types/types';

interface GenreListProps {
  setGenre: (id:number) => void,
  selectedGenre?: number,
  setError: ({} : GameAppError) => void
}

const GenreList = ({setGenre, selectedGenre, setError} : GenreListProps) => {

  const {data, error, isFetching} = useGenres();

  useEffect(() => {
    if (error)
      setError({message: error.message, description: "Genre selection will not be available"})
  }, [error])  

  
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