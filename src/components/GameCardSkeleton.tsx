import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card width={'100%'} overflow='hidden' variant={'filled'}>
      <Skeleton height={"150px"} width={'100%'}/>
      <CardBody>
        <SkeletonText height={"100px"} marginBottom={4}/>
      </CardBody>
    </Card>
  )
}

export default GameCardSkeleton