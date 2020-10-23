import React from "react"
import Logo from "./Logo"
import NavMenu from "./NavMenu"
import SiteInfo from "./SiteInfo"
import Content from "./Content"
import SEO from "./seo"
import "../assets/scss/index.module.scss"

export default function Layout({ context, children }) {
  return (
    <>
      <SEO title="default title" />
      <Logo />
      <SiteInfo />
      <NavMenu />
      <Content context={context} />
      {children}
    </>
  )
}
