import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import decodeHtmlEntity from "./decodeHtmlEntity"

export default function NavMenu() {
  const data = useStaticQuery(graphql`
    query {
      allWordpressWpApiMenusMenusItems(filter: { name: { eq: "nav-menu" } }) {
        edges {
          node {
            items {
              title
              object_slug
              object_id
            }
          }
        }
      }
    }
  `)
  return (
    <nav>
      <ul>
        {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
          <li key={item.object_id}>
            <Link to={`/${item.object_slug}`}>
              {decodeHtmlEntity(item.title)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
