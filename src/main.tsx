import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App'
import theme from './theme'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Global Settings goes here
const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        retry: 1,
        // cacheTime: 300_000, //ms - 5m
        // staleTime: 5 * 1000, // 10s
        // refetchOnWindowFocus: false,
        // refetchOnReconnect: false,
        // refetchOnMount: false
      }
    }
  }
  )

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
      <ReactQueryDevtools />
    </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
