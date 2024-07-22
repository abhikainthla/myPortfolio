import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript, extendTheme, useColorMode } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'

const styles = {
  global: (props) => ({
    body: {
      color: props.colorMode === 'dark' ? 'whiteAlpha.900' : 'blue.800',
      bg: props.colorMode === 'dark' ? '#101010' : 'gray.100',
    }
  })
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const colors = {
  blue: {
    light: '#616161',
    dark: '#455963',
  }
}

const theme = extendTheme({ config, styles, colors });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
