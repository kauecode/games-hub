import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from '../assets/react.svg'

const NavBar = () => {
  return (
    <>
      <HStack>
        <Image src={Logo} boxSize="80px"/>
        <Text>Navigation</Text>
      </HStack>
    </>
  )
}

export default NavBar