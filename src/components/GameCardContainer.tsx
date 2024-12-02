import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface GameCardContainerProps {
  children : ReactNode
}

const GameCardContainer = ({children} : GameCardContainerProps) => {
  return (
    <Box borderRadius={10}>
      {children}
    </Box>
  )
}

export default GameCardContainer