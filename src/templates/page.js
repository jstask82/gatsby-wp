import React from "react"
import Layout from "../components/Layout"
import Portfolio from "../components/Portfolio"

export default function Page({ pageContext }) {
  const { data } = pageContext
  return (
    <Layout context={data}>
      <Portfolio />
    </Layout>
  )
}
