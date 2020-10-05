import React from "react"
import Layout from "../components/Layout"
import Portfolio from "../components/Portfolio"

export default function Page({ pageContext }) {
  return (
    <Layout context={pageContext.data}>
      <Portfolio />
    </Layout>
  )
}
