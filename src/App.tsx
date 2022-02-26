import "tachyons"
import "./custom.css"
import { About, Vision, Promo, Header, Footer } from "./components"

function App() {
  return (
    <>
      <Header />
      <main className="relative z-1">
        <About />
        <Vision />
        <Promo />
        <Footer />
      </main>
    </>
  )
}

export default App
