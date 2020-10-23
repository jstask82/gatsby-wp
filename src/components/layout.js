import React from "react"
import Logo from "./Logo"
import NavMenu from "./NavMenu"
import SiteInfo from "./SiteInfo"
import Content from "./Content"
import SEO from "./seo"

export default function Layout({ context, children }) {
  return (
    <>
      <SEO />
      <Logo />
      <SiteInfo />
      <NavMenu />
      <Content context={context} />
      {children}
    </>
  )
}
