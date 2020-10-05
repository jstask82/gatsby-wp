import React from "react"
import Favicon from "./FavIcon"
import Logo from "./Logo"
import NavMenu from "./NavMenu"
import SiteInfo from "./SiteInfo"

export default function Layout({ children }) {
  return (
    <>
      <Favicon />
      <Logo />
      <NavMenu />
      <SiteInfo />
      {children}
    </>
  )
}
