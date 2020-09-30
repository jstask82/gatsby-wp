import React from "react"
import NavMenu from "./navMenu"

export default function Layout({ children }) {
  return (
    <>
      <NavMenu />
      {children}
    </>
  )
}
