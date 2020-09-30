import { graphql, StaticQuery, Link } from "gatsby"
import React from "react"
import * as he from "he"

export default function NavMenu() {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpApiMenusMenusItems(
            filter: { name: { eq: "nav-menu" } }
          ) {
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
      `}
      render={props => (
        <nav>
          <ul>
            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
              item => (
                <li key={item.object_id}>
                  <Link to={`/${item.object_slug}`}>
                    {he.decode(item.title)}
                  </Link>
                  {console.log(item.title)}
                </li>
              )
            )}
          </ul>
        </nav>
      )}
    />
  )
}
