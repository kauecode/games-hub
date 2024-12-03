import React, { useEffect } from 'react'
import useGenres, { Genre } from '../hooks/useGenres';
import { HStack, List, ListItem, Image, Text, Spinner, Button, Heading } from '@chakra-ui/react';
import resizeImg from '../utils/image-resize';
import { GameAppError } from '../App';
import GenreListSkeleton from './GenreListSkeleton';

interface GenreListProps {
  setGenre: (g:Genre) => void,
  selectedGenre: Genre | null,
  setError: ({} : GameAppError) => void
}

const GenreList = ({setGenre, selectedGenre, setError} : GenreListProps) => {

  const { data, error, isLoading } = useGenres();

  useEffect(() => {
    if (error)
      setError({message: error, description: "Genre selection will not be available"})
  }, [error])  

  return (
    <>
      <Heading fontSize={'2xl'} pt={2} pb={2}>Genres</Heading>
      <List>
        {isLoading && <GenreListSkeleton numberOfItems={20} />}
        {data.map((genre) => 
          <ListItem key={genre.id} paddingY={2}>
            <HStack>
              <Image alt='' role='presentation' objectFit='cover' boxSize={10} borderRadius={10} src={resizeImg(genre.image_background)}/>
              <Button 
                whiteSpace="normal" textAlign='left'
                fontWeight={selectedGenre?.id === genre.id ? 'extrabold' : 'normal'}
                variant={'link'} fontSize={'lg'}
                onClick={() => setGenre(genre)}
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