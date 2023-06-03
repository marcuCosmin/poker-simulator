import { render, screen } from "@testing-library/react"

import App, { testid } from "./app"

// Not testing the GlobalStyle render as it comes from an external library which is supposededly tested on their side

test("renders the App successfully", () => {
  render(<App />)

  const container = screen.getByTestId(testid)

  expect(container).toBeInTheDocument()
})
