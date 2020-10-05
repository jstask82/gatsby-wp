import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

export default function Logo() {
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
  return (
    <Link to="/">
      <img
        src={logo.allWordpressWpLogo.nodes[0].url.source_url}
        title={logo.allWordpressWpLogo.nodes[0].url.title}
        alt={logo.allWordpressWpLogo.nodes[0].url.alt_text}
      ></img>
    </Link>
  )
}
