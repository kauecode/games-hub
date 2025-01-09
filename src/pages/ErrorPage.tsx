import { Text, Grid, GridItem, SkipNavLink, Heading, HStack, VStack } from '@chakra-ui/react';
import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import SystemAlert from '../components/SystemAlert';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const ErrorPage = () => {

  const error = useRouteError()
  console.log(error);

  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>
      <SystemAlert/>
      <Grid 
        minHeight={"100vh"}
        templateAreas={{ base: `"nav" "main" "footer"`}}
        templateColumns={{ base: '1fr' }}
        >        
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        <GridItem as="main" area="main">
          <VStack>
          <Heading mt={2} fontSize={'2xl'}>Ooops...</Heading>         
            {isRouteErrorResponse(error) 
              ? <Text>...the page you looking for can't be found!</Text> 
              : <Text>...we have a problem!</Text>}      
          </VStack>            
        </GridItem> 

        <GridItem area="footer">
          <Footer />
        </GridItem>        
      </Grid>   
    </>
  )
}

export default ErrorPage