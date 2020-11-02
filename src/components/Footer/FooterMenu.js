import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import decodeHtmlEntity from "../common/decodeHtmlEntity"
import Link from "../common/Link"
import css from "./FooterMenu.module.scss"

// TDODO: Read Menu-Name from configuration
export default function NavMenu() {
  const data = useStaticQuery(graphql`
    query {
      allWordpressWpApiMenusMenusItems(
        filter: { name: { eq: "footer-menu" } }
      ) {
        edges {
          node {
            items {
              title
              url
              object_id
            }
          }
        }
      }
    }
  `)

  return (
    <ul role="navigation" className={css.footer__navigation}>
      {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
        <li className={css["footer__navigation-item"]} key={item.object_id}>
          <Link to={`${item.url}`}>{decodeHtmlEntity(item.title)}</Link>
        </li>
      ))}
    </ul>
  )
}
