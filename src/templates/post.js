import React from "react"
import Layout from "../components/Layout"

export default function Page({ pageContext }) {
  return <Layout context={pageContext.data}></Layout>
}
