import { HStack, useColorMode, Link, Text, Button } from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import Logo from './Logo'
import useQueryStore from '../stores/queryStore'
import { Link as RouterLink } from 'react-router-dom'

const NavBar = () => {

  const {colorMode} = useColorMode()    

  return (
    <>
      <HStack padding="10px">
        <RouterLink to="/" aria-label="Home">
          <Logo color={colorMode === "dark" ? "#f5f5f5f0" : "#000000de"} padding={2}/>
        </RouterLink>
        <SearchInput/>
        <ColorModeSwitch />
        <Button rounded={'full'} as={RouterLink} to='about' m={0} variant={'ghost'}>
          <Text fontWeight='semibold'>About</Text>
        </Button>        
      </HStack>
    </>
  )
}

export default NavBar