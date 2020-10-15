import React from "react"
import decodeHtmlEntity from "./decodeHtmlEntity"
import parseHtml from "./parseHtml"

export default function Content({ context }) {
  const { title, content } = context
  return (
    <>
      <h1>{decodeHtmlEntity(title)}</h1>
      {parseHtml(content)}
    </>
  )
}
