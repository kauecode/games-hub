import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres';
import { HStack, List, ListItem, Image, Text, Spinner, Button } from '@chakra-ui/react';
import resizeImg from '../utils/image-resize';

interface GenreListProps {
  setGenre: (g:Genre) => void,
  selectedGenre: Genre | null
}

const GenreList = ({setGenre, selectedGenre} : GenreListProps) => {

  const { data, error, isLoading } = useGenres();

  // #Todo: Add skeleton, add global error

  return (
    <>
      <List>
        {isLoading && <Spinner />}
        {error && <Text>Could not load genres, ERROR: {error}</Text>}
        {data.map((genre) => 
          <ListItem key={genre.id} paddingY={2}>
            <HStack>
              <Image boxSize={10} borderRadius={10} src={resizeImg(genre.image_background)}/>
              <Button 
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