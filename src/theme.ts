// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config,
  color:{
    purple: {
      50:'#f6eef6de',
      100:'#e3cde3de',
      200:'#d0accfde',
      300:'#bf8bbede',
      400:'#ae6aadde',
      500:'#945194de',
      600:'#734073de',
      700:'#522e51de',
      800:'#311c31de',
      900:'#110911de'
    }
  }
 })

export default theme