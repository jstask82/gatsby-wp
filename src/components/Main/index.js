import React from "react"
import NavMenu from "../Header/NavMenu"
import SiteInfo from "../SiteInfo"

export default function Main({ childs }) {
  return (
    <main>
      <SiteInfo />
      <NavMenu />
      {childs}
    </main>
  )
}
