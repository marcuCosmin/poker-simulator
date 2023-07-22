import {
  useState,
  createContext,
  useContext,
  type PropsWithChildren,
} from "react"

import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components"

type ThemeContextValues = {
  theme: "dark" | "light"
  switchTheme: () => void
}

const ThemeContext = createContext<ThemeContextValues | undefined>(undefined)

const lightPrimary = "#ffffff"
const lightSecondary = "#f8f9fa"
const darkPrimary = "#18191A"
const darkSecondary = "#3E4042"

const themes = {
  light: {
    primary: lightPrimary,
    secondary: lightSecondary,
    complementaryPrimary: darkPrimary,
    complementarySecondary: darkSecondary,
    error: "#dc3545",
  },
  dark: {
    primary: darkPrimary,
    secondary: darkSecondary,
    complementaryPrimary: lightPrimary,
    complementarySecondary: lightSecondary,
    error: "#b7202e",
  },
}

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<"dark" | "light">("light")

  const switchTheme = () => setTheme(theme === "light" ? "dark" : "light")

  const providerValue = {
    theme,
    switchTheme,
  }

  return (
    <ThemeContext.Provider value={providerValue}>
      <StyledComponentsThemeProvider theme={themes[theme]}>
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  )
}

const useThemeContext = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error("Can not call 'useThemeContext' outside an ThemeProvider")
  }

  return context
}

export { ThemeProvider, useThemeContext }
