import React from "react"
import { Link } from "gatsby"
import FormatDateTime from "../common/FormatDateTime"
import decodeHtmlEntity from "../common/decodeHtmlEntity"
import parseHtml from "../common/parseHtml"

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
