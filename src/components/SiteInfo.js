import { useStaticQuery, graphql } from "gatsby"
import React from "react"

export default function SiteInfo() {
  const data = useStaticQuery(graphql`
    query {
      allWordpressSiteMetadata {
        edges {
          node {
            name
            description
          }
        }
      }
    }
  `)
  return (
    <ul>
      <li>{data.allWordpressSiteMetadata.edges[0].node.name}</li>
      <li>{data.allWordpressSiteMetadata.edges[0].node.description}</li>
    </ul>
  )
}
