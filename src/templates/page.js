import React from "react"
import Layout from "../components/Layout"
import Portfolio from "../components/Portfolio"
import Content from "../components/Main/Content"

export default function Page({ pageContext }) {
  const { data } = pageContext
  return (
    <Layout>
      <Content context={data} />
      <Portfolio />
    </Layout>
  )
}
