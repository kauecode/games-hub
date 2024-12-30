import { Heading } from '@chakra-ui/react'
import useGenre from '../hooks/useGenre'
import usePlatform from '../hooks/usePlatform'
import useQueryStore from '../stores/queryStore'

const GameHeading = () => {

  const selectedGenreId = useQueryStore(s => s.gameQuery.selectedGenreId);
  const selectedGenre = useGenre(selectedGenreId)

  const selectedPlatformId = useQueryStore(s => s.gameQuery.selectedPlatformId);
  const selectedPlatform = usePlatform(selectedPlatformId)

  const currentSearchString = useQueryStore(s => s.gameQuery.searchString);
   
  const heading = 
    (currentSearchString ? `Results for "${currentSearchString}" in ` : "")
    + `${(selectedPlatform?.name || "")} ${(selectedGenre?.name || "")} Games`

  return (
    <Heading paddingLeft={5} paddingTop={5} as={'h1'}>{heading}</Heading>
  )
}

export default GameHeading