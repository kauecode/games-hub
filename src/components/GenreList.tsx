import React from 'react'
import useGenres from '../hooks/useGenres';
import { HStack, List, ListItem, Image, Text } from '@chakra-ui/react';
import resizeImg from '../utils/image-url';

const GenreList = () => {

  const { data, error, isLoading } = useGenres();

  return (
    <>
      <List>
        {data.map((genre) => 
          <ListItem key={genre.id} paddingY={2}>
            <HStack>
              <Image boxSize={10} borderRadius={10} src={resizeImg(genre.image_background)}/>
              <Text fontSize={'lg'}>{genre.name}</Text>
            </HStack>            
          </ListItem>
        )}
      </List>
    </>
    
  )
}

export default GenreList