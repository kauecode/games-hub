import { Box, Button, HStack, Image, Link, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import Logo from './Logo'
import { GameQuery } from '../App'


interface NavBarProps {
  onSearch: (s:string) => void
  gameQuery: GameQuery
}

const NavBar = ({onSearch, gameQuery} : NavBarProps) => {

  const {colorMode} = useColorMode()    

  return (
    <>
      <HStack padding="10px">
        <Link href="/" aria-label="Home">
          <Logo color={colorMode === "dark" ? "#f5f5f5f0" : "#000000de"}/>
        </Link>
        <SearchInput onSearch={onSearch} gameQuery={gameQuery}/>
        <ColorModeSwitch />
      </HStack>
    </>
  )
}

export default NavBar