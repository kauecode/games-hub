import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'dark'
}

// Custom breakpoints
const breakpoints = {
  sm: "30em",     // 480px
  md: "48em",     // 768px
  lg: "62em",     // 992px
  xl: "80em",     // 1280px
  xxl: "100em",   // 1600px
  xxxl: "114em",  // 1824px
};

const theme = extendTheme({
  config,
  breakpoints,
  colors: {
    gray: {
      50: '#f9f0f0',
      100: '#dad8d7',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#727272',
      600: '#595959',
      700: '#403f3f',
      800: '#282625',
      900: '#0d0d05',
    }
  }
});

export default theme;


