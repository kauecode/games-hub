import { HStack, ListItem, Skeleton, SkeletonText } from '@chakra-ui/react'

interface GenreListSkeletonProps {
  numberOfItems: number
}

const GenreListSkeleton = ({numberOfItems} : GenreListSkeletonProps) => {

  const itemsToBeRendered = [...Array(numberOfItems).keys()];

  // #THOUGHTS: could do with array from as well...
  // const itemsToBeRendered = Array.from({ length: numberOfItems }, (_, i) => i);

  return (
    <>
    {itemsToBeRendered.map((item) => 
    <ListItem key={item} paddingY={2}>
      <HStack>
        <Skeleton 
          objectFit='cover' 
          boxSize={10} 
          borderRadius={10} />
        <SkeletonText noOfLines={1} width='50%' marginBottom={0}/>
      </HStack>            
    </ListItem>
    )}
    </>

  )
}

export default GenreListSkeleton