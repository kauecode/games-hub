import { Box, Heading, HStack, Link, Text } from '@chakra-ui/react'
import { FaCanadianMapleLeaf, FaReact } from 'react-icons/fa'
import { SiChakraui, SiFramer, SiVite } from 'react-icons/si'
import { BiLogoTypescript } from "react-icons/bi";
import Logo from './Logo';

const Footer = () => {
  return (
    <Box justifyContent={'Center'} id='FooterAbout' as="footer" bg="gray.700" color="white" mt={8} py={8} px={5} textAlign="center">
      <Text>
        Made in Toronto <FaCanadianMapleLeaf color='orange' style={{display: "inline"}}/> Canada by <Link fontWeight='semibold' textDecoration='underline' href='https://kaue.ca' isExternal>Kaue</Link>            
        &nbsp;•&nbsp;This is a test project, you can find the <Link fontWeight='semibold' textDecoration='underline' href='https://github.com/kauecode/games-hub' isExternal>source code here</Link>.
      </Text>
    </Box>
  )
}

export default Footer