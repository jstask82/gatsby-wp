import React from "react"
import Layout from "../components/Layout"

export default function Portfolio({ pageContext }) {
  //he parses html entities, parse parses HTML like dangerouslySetInnerHTML but without a sourrounding tag
  return (
    <Layout context={pageContext.data}>
      {
        //Render external link if set
        pageContext.data.acf.url ? (
          <a href={pageContext.data.acf.url}>Visit project page</a>
        ) : null
      }
    </Layout>
  )
}
