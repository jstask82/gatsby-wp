import React from "react"
import { Link } from "gatsby"
import FormatDateTime from "../FormatDateTime"
import decodeHtmlEntity from "../decodeHtmlEntity"
import parseHtml from "../parseHtml"

export default function Excerpt({ context }) {
  const { title, excerpt, date, path } = context
  return (
    <>
      <h1>{decodeHtmlEntity(title)}</h1>
      {parseHtml(excerpt)}
      <p>
        <Link to={`/post${path}`}>read more...</Link>
      </p>
      <p>
        Veröffentlicht am <FormatDateTime date={date} />
      </p>
    </>
  )
}
