import React from "react"
import "tachyons"
import { Route, Switch } from "react-router-dom"
import { getRoutes } from "vite-plugin-ssr-ssg"
import { Header } from "./components"

import "./custom.css"

const pages = import.meta.globEager("./pages/**/*.tsx")
const routes = getRoutes<"react">(pages)

function App() {
  return (
    <>
      <Header />
      <Switch>
        {routes.map(({ path, name, Component }) => {
          return (
            <Route exact path={path} key={name}>
              <Component />
            </Route>
          )
        })}
      </Switch>
    </>
  )
}

export default App
