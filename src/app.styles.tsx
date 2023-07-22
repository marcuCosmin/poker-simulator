import { createGlobalStyle } from "styled-components"

export type Theme = {
  primary: string
  secondary: string
  complementaryPrimary: string
  complementarySecondary: string
}

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
    body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.complementaryPrimary};
    }

    button {
      outline: none;
      border-radius: 0.35rem;
      cursor: pointer;
      padding: 10px 20px;
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.complementarySecondary};
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: ${({ theme }) => theme.complementarySecondary};
        border-color: ${({ theme }) => theme.complementaryPrimary};
        color: ${({ theme }) => theme.primary};
      }
      &:focus {
        background-color: ${({ theme }) => theme.primary};
        border-color: ${({ theme }) => theme.complementaryPrimary};
        color: ${({ theme }) => theme.complementaryPrimary};
      }
    }

    input {
      outline: none;
      border-radius: 0.35rem;
      padding: 10px 20px;
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.complementarySecondary};
      transition: 0.3s ease-in-out;
      box-sizing: border-box;
      &:focus {
        background-color: ${({ theme }) => theme.primary};
      }
    }
`
