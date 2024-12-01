import { HStack, Switch, useColorMode, Text, Button } from "@chakra-ui/react"
import { FaMoon } from "react-icons/fa"
import { IoSunny } from "react-icons/io5";


const ColorModeSwitch = () => {

  const {toggleColorMode, colorMode} = useColorMode()

  return (
      <Button 
        variant={'ghost'} 
        onClick={() => toggleColorMode()}
        borderRadius={'full'}
        aria-label={colorMode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={colorMode === "dark" ? "true" : "false"}
        >
        {colorMode === 'dark' ? <IoSunny />  : <FaMoon />}        
      </Button>
  )
}

export default ColorModeSwitch