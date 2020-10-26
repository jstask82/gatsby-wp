import React from "react"
import SiteInfo from "../SiteInfo"

export default function Main({ childs }) {
  return (
    <main>
      <SiteInfo />
      {childs}
    </main>
  )
}
