import React from "react"
import Layout from "../components/Layout"

export default function Page({ pageContext }) {
  const { data } = pageContext
  return <Layout context={data}></Layout>
}
