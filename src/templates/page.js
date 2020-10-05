import React from "react"
import Layout from "../components/layout"
import * as he from "he"
import parse from "html-react-parser"
import Portfolio from "../components/Portfolio"

export default function Page({ pageContext }) {
  //he parses html entities, parse parses HTML like dangerouslySetInnerHTML but without a sourrounding tag
  return (
    <Layout>
      <h1>{he.decode(pageContext.data.title)}</h1>
      {parse(pageContext.data.content)}
      <Portfolio />
    </Layout>
  )
}
