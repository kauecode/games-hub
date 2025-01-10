import { Outlet } from 'react-router-dom'
import { SkipNavLink, Grid, GridItem, Container } from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import SystemAlert from '../components/SystemAlert'

const Layout = () => {
  
  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>
      <SystemAlert/>
      <Container maxW={'8xl'}>
        <NavBar />
        <Outlet />
      </Container>
      <Footer />  
    </>
  )
}

export default Layout