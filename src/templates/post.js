import React from "react"
import Layout from "../components/Layout"
import * as he from "he"
import parse from "html-react-parser"

export default function Page({ pageContext }) {
  //he parses html entities, parse parses HTML like dangerouslySetInnerHTML but without a sourrounding tag
  return (
    <Layout>
      <h1>{he.decode(pageContext.data.title)}</h1>
      {parse(pageContext.data.content)}
    </Layout>
  )
}
