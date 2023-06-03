import React from "react"
import ReactDOM from "react-dom/client"

import App from "./app"

const rootElement = document.getElementById("root")

if (!rootElement) {
  throw new Error(
    "Element with id 'root' doesn't exist in the DOM tree. The React application couldn't be rendered."
  )
}

const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
