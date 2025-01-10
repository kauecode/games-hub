import { HStack, useColorMode } from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import Logo from './Logo'
import useQueryStore from '../stores/queryStore'
import { Link } from 'react-router-dom'

const NavBar = () => {

  const {colorMode} = useColorMode()    

  return (
    <>
      <HStack padding="10px">
        <Link to="/" aria-label="Home">
          <Logo color={colorMode === "dark" ? "#f5f5f5f0" : "#000000de"}/>
        </Link>
        <SearchInput/>
        <ColorModeSwitch />
        {/* <Link pr={3} href="#FooterAbout">
          <Text fontWeight='semibold'>About</Text>
        </Link>         */}
      </HStack>
    </>
  )
}

export default NavBar