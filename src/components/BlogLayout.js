import React from "react"
import Excerpt from "./Main/Excerpt"

export default function BlogLayout({ context, children }) {
  return (
    <>
      <Excerpt context={context} />
      {children}
    </>
  )
}
