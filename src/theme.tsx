import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { ButtonStyles as Button } from './styles/button'

const fonts = { mono: `'Times', monospace` }

const config : ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const breakpoints = {
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
}

const theme = extendTheme({
  semanticTokens: {
    colors: {
      text: {
        default: '#16161D',
        _dark: 'blue.200',
      },
    },
    radii: {
      button: '12px',
    },
  },
  colors: {
    black: '#16161D',
  },
  fonts,
  breakpoints,
  components: {
    Button,
  },
  config
})

export default theme
