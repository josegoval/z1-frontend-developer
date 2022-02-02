import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../styles/GlobalStyle'
import theme from '../../styles/theme'
import { ProviderProps } from './types'

export default function Provider({ children }: ProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
