import { Text, GridItem, Heading, Box, Link, Button, HStack, useColorMode, Badge, SimpleGrid, Flex } from '@chakra-ui/react'
import { RxOpenInNewWindow } from 'react-icons/rx'
import { FaCanadianMapleLeaf, FaGithub, FaReact } from 'react-icons/fa'
import { SiChakraui, SiFramer, SiVite } from 'react-icons/si'
import { BiLogoTypescript } from "react-icons/bi";
import Logo from '../components/Logo';

const AboutPage = () => {

  const {colorMode} = useColorMode()    

  return (

    <>
      <GridItem padding={5} as="main" area="main">
        <Box 
          maxWidth={'580px'} 
          margin={'0 auto'} py={8} px={2} 
          textAlign="center">
    
          <Link display="inline-block" href="https://kaue.ca" isExternal>
            <Logo color={colorMode === "dark" ? "#f5f5f5f0" : "#000000de"} padding={2} size='150px'/>
          </Link>
          <Heading as={'h1'} size={{base: 'xl', lg: '2xl'}} m={10}>
            About this Project
          </Heading>         

          <Heading fontSize='2xl' mt={5} mb={2}>
            What is this?
          </Heading> 

          <Text>This is "somewhat" of a clone of the <Link fontWeight='extrabold' href='https://rawg.io' isExternal>RAWG</Link> website, allowing users to search for games across various platforms and genres.</Text>

          <Heading fontSize='2xl' mt={5} mb={2}>
            Why?
          </Heading> 

          <Text>This project serves as a testbed to explore and showcase various React and Front-End concepts. It began a long time ago to help me learn TS — and has since evolved as a playground for experimenting with new ideas.</Text>
          <Text pt={2}>I also believe it makes a cool portfolio piece ;)</Text>

          <Heading fontSize='2xl' mt={5} mb={2}>
            How?
          </Heading> 

          <Text>This project is built using React and leverages the awesome <Link fontWeight='extrabold' href='https://api.rawg.io/docs/' isExternal>RAWG API</Link>. It incorporates several key concepts and technologies, including:</Text>

          <Flex
            mt={2}
            wrap='wrap' 
            justify='center'>
            <Badge rounded='md' colorScheme='blue' py={1} px={2} m={1}>TypeScript</Badge>
            <Badge rounded='md' colorScheme='cyan' py={1} px={2} m={1}>React</Badge>
            <Badge rounded='md' colorScheme='cyan' py={1} px={2} m={1}>Custom Hooks</Badge>
            <Badge rounded='md' colorScheme='cyan' py={1} px={2} m={1}>Custom Providers</Badge>          
            <Badge rounded='md' colorScheme='cyan' py={1} px={2} m={1}>React Router</Badge>          
            <Badge rounded='md' colorScheme='cyan' py={1} px={2} m={1}>Context API</Badge>
            <Badge rounded='md' colorScheme='orange' py={1} px={2} m={1}>TanStack Query</Badge>
            <Badge rounded='md' colorScheme='gray' py={1} px={2} m={1}>Zustand</Badge>
            <Badge rounded='md' colorScheme='teal' py={1} px={2} m={1}>Chakra UI</Badge>
            <Badge rounded='md' colorScheme='yellow' py={1} px={2} m={1}>Framer Motion</Badge>            
            <Badge rounded='md' colorScheme='purple' py={1} px={2} m={1}>Tooling using Vite</Badge>
            <Badge rounded='md' colorScheme='gray' py={1} px={2} m={1}>Hosted on Vercel</Badge>
          </Flex>

          <Button 
            mt={10}
            mx={2}
            as={Link}
            variant={"outline"}
            isExternal                 
            rightIcon={<Logo size='16px' color={colorMode === "dark" ? "#f5f5f5f0" : "#000000de"}/>}
            href={'https://kaue.ca'}>
            Kaue.ca
          </Button>

          <Button 
            mt={10}
            mx={2}
            as={Link}
            variant={"outline"}
            isExternal                 
            rightIcon={<FaGithub />}
            href={'https://github.com/kauecode/games-hub'}>
            Source Code on GitHub
          </Button>          

        </Box>

      </GridItem>
    </>

  )
}

export default AboutPage