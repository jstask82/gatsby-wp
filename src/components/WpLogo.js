import { graphql, useStaticQuery } from "gatsby"
import React from "react"

function WpLogo() {
  const logo = useStaticQuery(graphql`
    query {
      allWordpressWpLogo {
        nodes {
          url {
            source_url
            title
            alt_text
          }
        }
      }
    }
  `)

  const {
    source_url,
    title,
    alt_text,
  } = logo.allWordpressSiteMetadata.edges[0].node

  return <img src={source_url} title={title} alt={alt_text}></img>
}

export default WpLogo
