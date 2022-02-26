import React from "react"
import { hydrate } from "react-dom"
import App from "./App"
import { StrictMode } from "react"
import { BrowserRouter } from "react-router-dom"
import { HeadProvider } from "react-head"

hydrate(
  <StrictMode>
    <HeadProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HeadProvider>
  </StrictMode>,
  document.getElementById("root")
)
