import { Container, GlobalStyle } from "./app.styles"

export const testid = "app-container"

function App() {
  return (
    <>
      <GlobalStyle />
      <Container data-testid={testid}>Poker Simulator</Container>
    </>
  )
}

export default App
