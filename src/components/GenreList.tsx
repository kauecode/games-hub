import { useContext } from 'react'
import useGenres from '../hooks/useGenres';
import { HStack, List, ListItem, Image, Button, Heading } from '@chakra-ui/react';
import resizeImg from '../utils/image-resize';
import GenreListSkeleton from './GenreListSkeleton';
import { SystemAlertContext } from './SystemAlert';
import useFetchError from '../hooks/useFetchError';
import useQueryStore from '../stores/queryStore';

const GenreList = () => {

  const {data, error, isFetching} = useGenres();
  const {dispatch: alertDispatcher} = useContext(SystemAlertContext);
  const setGenreId = useQueryStore(s => s.setGenreId);
  const selectedGenreId = useQueryStore(s => s.gameQuery.selectedGenreId);

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
                fontWeight={selectedGenreId === genre.id ? 'extrabold' : 'normal'}
                variant={'link'} fontSize={'lg'}
                onClick={() => setGenreId(genre.id)}
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