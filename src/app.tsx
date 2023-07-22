import { GlobalStyle } from "./app.styles"

import { Main } from "./components"

import { AuthProvider, ThemeProvider } from "./contexts"

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
