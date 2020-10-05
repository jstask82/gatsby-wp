import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import * as he from "he"

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
            <Link to={`/${item.object_slug}`}>{he.decode(item.title)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
