import { Box, HStack, Image, Link, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import Logo from './Logo'

const NavBar = () => {

  const {colorMode} = useColorMode()    

  return (
    <>
      <HStack padding="10px">
        <Link href="/" aria-label="Home">
          <Logo color={colorMode === "dark" ? "#f5f5f5f0" : "#000000de"}/>
        </Link>
        <SearchInput/>
        <ColorModeSwitch />
      </HStack>
    </>
  )
}

export default NavBar