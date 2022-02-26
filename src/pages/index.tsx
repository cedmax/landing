import React, { memo } from "react"

import { About, Vision, Trailer, Credits, Header } from "../components"

function App() {
  return (
    <>
      <Header />

      <main className="relative z-1">
        <About />
        <Vision />
        <Trailer />
        <Credits />
      </main>
    </>
  )
}

export default memo(App)
