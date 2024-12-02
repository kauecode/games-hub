import { HStack, ListItem, Skeleton, SkeletonText, Image, Box } from '@chakra-ui/react'
import React from 'react'

interface GenreListSkeletonProps {
  numberOfItems: number
}

const GenreListSkeleton = ({numberOfItems} : GenreListSkeletonProps) => {

  const itemsToBeRendered = [...Array(numberOfItems).keys()];

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