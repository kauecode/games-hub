import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from '../assets/react.svg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <>
      <HStack padding="10px">
        <Image src={Logo} boxSize="80px"/>
        <SearchInput/>
        <ColorModeSwitch />
      </HStack>
    </>
  )
}

export default NavBar