import React from "react"
import Layout from "../components/Layout"

export default function Portfolio({ pageContext }) {
  const { data } = pageContext
  return (
    <Layout context={data}>
      {
        //Render external link if set
        data.acf.url ? <a href={data.acf.url}>Visit project page</a> : null
      }
    </Layout>
  )
}
