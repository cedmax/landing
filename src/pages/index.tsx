import React, { memo } from "react"

import { About, Vision, Trailer, Credits, Header } from "../components"

function App() {
  return (
    <>
      <Header />

      <main className="relative z-1">
        <About id="about" prev="header" next="vision" />
        <Vision id="vision" prev="about" next="trailer" />
        <Trailer id="trailer" prev="vision" next="credits" />
        <Credits id="credits" prev="trailer" />
      </main>
    </>
  )
}

export default memo(App)
