import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/styles/Global'
import { Container } from './components/styles/Container.styled'
import { Header } from './components/Header'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  }
}

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <>
        <GlobalStyles/>
      <Header />
      <Container>
        <h1>app</h1>
      </Container>
    </>
    </ThemeProvider>
  )
}

export default App
