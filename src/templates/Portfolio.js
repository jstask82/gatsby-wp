import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import * as he from "he"
import parse from "html-react-parser"

export default function Portfolio({ pageContext }) {
  //he parses html entities, parse parses HTML like dangerouslySetInnerHTML but without a sourrounding tag
  return (
    <Layout>
      <h1>{he.decode(pageContext.data.title)}</h1>
      {parse(pageContext.data.content)}
      {pageContext.data.acf.url ? (
        <Link href={pageContext.data.acf.url}>Visit project page</Link>
      ) : null}
    </Layout>
  )
}
