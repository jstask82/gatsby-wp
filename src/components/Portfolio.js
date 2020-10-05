import { graphql, useStaticQuery, Link } from "gatsby"
import parse from "html-react-parser"
import * as he from "he"
import React from "react"

export default function Portfolio() {
  const data = useStaticQuery(graphql`
    query {
      allWordpressWpPortfolio {
        edges {
          node {
            id
            title
            excerpt
            slug
            featured_media {
              title
              caption
              alt_text
              source_url
            }
          }
        }
      }
    }
  `)
  return (
    <ul>
      {data.allWordpressWpPortfolio.edges.map(edge => (
        <li key={edge.node.id}>
          <h3>{he.decode(edge.node.title)}</h3>
          <figure>
            <img
              title={edge.node.featured_media.title}
              alt={edge.node.featured_media.alt_text}
              src={edge.node.featured_media.source_url}
            />
            <figcaption>{parse(edge.node.featured_media.caption)}</figcaption>
          </figure>
          {parse(edge.node.excerpt)}
          <Link to={`/portfolio/${edge.node.slug}/`}>read more...</Link>
        </li>
      ))}
    </ul>
  )
}
