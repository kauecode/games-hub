import { Outlet } from 'react-router-dom'
import { SkipNavLink, Grid, GridItem } from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import SystemAlert, { SystemAlertProvider } from '../components/SystemAlert'

const Layout = () => {
  return (
    <SystemAlertProvider>
      <SkipNavLink>Skip to content</SkipNavLink>
      <SystemAlert/>
      <Grid 
        templateAreas={{        
          base: `"nav" "main" "footer"`,
          lg: `"nav nav" "aside main" "footer footer"`        
        }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr'
        }}
        >        
        <GridItem area="nav">
          <NavBar />
        </GridItem>

        <Outlet />
        
        <GridItem area="footer">
          <Footer />
        </GridItem>        
      </Grid>    
    </SystemAlertProvider>
  )
}

export default Layout