import { Box, Heading, HStack, Link, Text } from '@chakra-ui/react'
import { FaCanadianMapleLeaf, FaReact } from 'react-icons/fa'
import { SiChakraui, SiFramer, SiVite } from 'react-icons/si'
import { BiLogoTypescript } from "react-icons/bi";
import Logo from './Logo';

const Footer = () => {
  return (
    <Box justifyContent={'Center'} id='FooterAbout' as="footer" bg="gray.700" color="white" mt={8} py={8} px={2} textAlign="center">
      <Link display="inline-block" href="https://kaue.ca" isExternal>
        <Logo color={"#f5f5f5f0"}/>      
      </Link>
      <Heading fontSize='2xl' mb={6}>
        About
      </Heading>
      <Text>
        Made in Toronto <FaCanadianMapleLeaf color='orange' style={{display: "inline"}}/> Canada by <Link fontWeight='semibold' textDecoration='underline' href='https://kaue.ca' isExternal>Kaue</Link>.        
      </Text>
      <Text my={2}>
        This is a test project, you can find the <Link fontWeight='semibold' textDecoration='underline' href='https://github.com/kauecode' isExternal>source code here</Link>.
      </Text>
      <Text mt={6} mb={2}>Inspired by <Link fontWeight='extrabold' href='https://rawg.io' isExternal>RAWG</Link> and built using their API, this project incorporates:</Text>
      <HStack spacing={2} justify="center">
        <Link 
          href="https://vitejs.dev/" 
          isExternal 
          aria-label="Learn more about Vite" 
          title="Vite">
          <SiVite fontSize={28} />
        </Link>
        <Text> + </Text>
        <Link 
          href="https://www.typescriptlang.org/" 
          isExternal 
          aria-label="Learn more about TypeScript" 
          title="TypeScript">
          <BiLogoTypescript fontSize={35} />
        </Link>
        <Text> + </Text>        
        <Link 
          href="https://reactjs.org/" 
          isExternal 
          aria-label="Learn more about React" 
          title="React">
          <FaReact fontSize={30} />
        </Link>
        <Text> + </Text>
        <Link 
          href="https://chakra-ui.com/" 
          isExternal 
          aria-label="Learn more about Chakra UI" 
          title="Chakra UI">
          <SiChakraui fontSize={28} />
        </Link>
        <Text> + </Text>
        <Link 
          href="https://motion.dev/" 
          isExternal 
          aria-label="Learn more about Framer Motion" 
          title="Framer Motion">
          <SiFramer fontSize={27} />
        </Link>        
      </HStack>
    </Box>
  )
}

export default Footer