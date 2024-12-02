import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'dark'
}

const theme = extendTheme({
  config,
  colors: {
    gray: 
    {
      50: '#f7f3e5',
      100: '#e1dace',
      200: '#cac1b3',
      300: '#b4a898',
      400: '#9d8f7b',
      500: '#847662',
      600: '#675b4b',
      700: '#4a4134',
      800: '#2e271d',
      900: '#160b00',
    }
  }
});

export default theme;


