import React from "react"
import Favicon from "./FavIcon"
import Logo from "./Logo"
import NavMenu from "./NavMenu"
import SiteInfo from "./SiteInfo"
import Content from "./Content"

export default function Layout({ context, children }) {
  return (
    <>
      <Favicon />
      <Logo />
      <SiteInfo />
      <NavMenu />
      <Content context={context} />
      {children}
    </>
  )
}
