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
  const { name, description } = data.allWordpressSiteMetadata.edges[0].node
  return (
    <ul>
      <li>{name}</li>
      <li>{description}</li>
    </ul>
  )
}
