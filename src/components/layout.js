import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import MainMenu from './mainMenu'

const Layout = ({ children }) => (
  <div>
    <MainMenu />
    {children}
  </div>
)

export default Layout
