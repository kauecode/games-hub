import { Box, HStack, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { FaCanadianMapleLeaf, FaGithub, FaReact } from 'react-icons/fa'
import { SiChakraui, SiVite } from 'react-icons/si'
import { BiLogoTypescript } from "react-icons/bi";


const Footer = () => {
  return (
    <Box as="footer" bg="gray.700" color="white" mt={8} py={8} px={2} textAlign="center">
      <Text>
        This is a test project, you can find the <Link fontWeight='semibold' textDecoration='underline' href='https://github.com/kauecode' isExternal>source code here</Link>.
      </Text>
      <Text my={2}>
        Made in Toronto, Canada <FaCanadianMapleLeaf color='orange' style={{display: "inline"}}/> by <Link fontWeight='semibold' textDecoration='underline' href='https://kaue.ca' isExternal>Kaue</Link>.
      </Text>
      <Text my={2}>Inspired by <Link fontWeight='extrabold' href='https://rawg.io' isExternal>RAWG</Link>, using their API, as well as:</Text>
      <HStack spacing={2} justify="center">
        <Link 
          href="https://vitejs.dev/" 
          isExternal 
          aria-label="Learn more about Vite" 
          title="Vite"
        >
          <SiVite fontSize={28} />
        </Link>
        <Text> + </Text>
        <Link 
          href="https://reactjs.org/" 
          isExternal 
          aria-label="Learn more about React" 
          title="React"
        >
          <FaReact fontSize={30} />
        </Link>
        <Text> + </Text>
        <Link 
          href="https://chakra-ui.com/" 
          isExternal 
          aria-label="Learn more about Chakra UI" 
          title="Chakra UI"
        >
          <SiChakraui fontSize={28} />
        </Link>
        <Text> + </Text>
        <Link 
          href="https://www.typescriptlang.org/" 
          isExternal 
          aria-label="Learn more about TypeScript" 
          title="TypeScript"
        >
          <BiLogoTypescript fontSize={35} />
        </Link>
      </HStack>
    </Box>
  )
}

export default Footer