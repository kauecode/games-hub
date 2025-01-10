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
      <NavBar />
      <VStack textAlign={'center'} p={5}>
        <Heading m={2} size={{base: 'xl', lg: '2xl'}}>Ooops...</Heading>         
          {isRouteErrorResponse(error) 
            ? <Text>...the page you are looking for can't be found, looks like a <strong>404</strong>!</Text> 
            : <Text>...we have a problem!</Text>}      
      </VStack>            
      <Footer />
    </>
  )
}

export default ErrorPage