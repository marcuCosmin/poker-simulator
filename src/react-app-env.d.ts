/// <reference types="react-scripts" />

import "styled-components"
import type { Theme } from "./app.styles"

declare module "styled-components" {
  export type DefaultTheme = Theme
}
