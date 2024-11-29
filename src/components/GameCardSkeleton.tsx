import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GameCardSkeleton = () => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Skeleton height={"150px"} width={"600px"} />
      <CardBody>
        <SkeletonText height={"100px"} marginBottom={4}/>
      </CardBody>
    </Card>
  )
}

export default GameCardSkeleton