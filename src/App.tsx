import { ThemeProvider } from 'styled-components';
import './App.css';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div />
    </ThemeProvider>
  );
}

export default App;
