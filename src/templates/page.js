import React from "react"
import Layout from "../components/Layout"
import Content from "../components/Main/Content"

export default function Page({ pageContext }) {
  const { data } = pageContext
  return (
    <Layout context={data}>
      <Content context={data} />
    </Layout>
  )
}
