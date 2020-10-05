import React from "react"
import Logo from "./Logo"
import NavMenu from "./NavMenu"
import SiteInfo from "./SiteInfo"
import Content from "./Content"

export default function Layout({ context, children }) {
  return (
    <>
      <Logo />
      <SiteInfo />
      <NavMenu />
      <Content context={context} />
      {children}
    </>
  )
}
