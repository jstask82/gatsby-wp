import React from "react"
import { Link } from "gatsby"
import BlogLayout from "../components/BlogLayout"
import Logo from "../components/Logo"
import SiteInfo from "../components/SiteInfo"
import NavMenu from "../components/NavMenu"

export default function Blog({ pageContext }) {
  const { data, pages, currentPage } = pageContext

  return (
    <>
      {/* Layout */}
      <Logo />
      <SiteInfo />
      <NavMenu />
      {data.map(entry => (
        <BlogLayout context={entry.node} key={entry.node.id} />
      ))}
      {/* Pagination */}
      <ul>
        {pages > 1
          ? Array.from({ length: pages }).map((page, index) => (
              <li key={index}>
                <Link to={index === 0 ? "/blog/" : `/blog/${index + 1}`}>
                  {index + 1}
                </Link>
              </li>
            ))
          : null}
      </ul>
    </>
  )
}
