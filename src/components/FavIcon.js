import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

export default function Favicon() {
  const favIcon = useStaticQuery(graphql`
    query {
      allWordpressWpFavicon {
        nodes {
          url {
            source_url
          }
        }
      }
    }
  `)
  return (
    <Helmet>
      <link
        rel="icon"
        type="image/png"
        href={favIcon.allWordpressWpFavicon.nodes[0].url.source_url}
      />
    </Helmet>
  )
}
