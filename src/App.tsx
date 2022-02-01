import { ThemeProvider } from 'styled-components'
import ScanView from './containers/ScanView'
import GlobalStyle from './styles/GlobalStyle'
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ScanView />
    </ThemeProvider>
  )
}

export default App
