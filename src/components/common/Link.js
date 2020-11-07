import React from "react"
import { Link as GatsbyLink } from "gatsby"

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({ children, to, activeClassName, partiallyActive, ...other }) => {
  // The expressions assume that any internal link (intended for Gatsby)
  // will start with exactly one slash, or starts with http[s]://[www.]baseurl/
  const startsWithApiUrl = new RegExp(
    `^https?:/{2}(w{3}.|w{0})(${process.env.API_URL})/.*`
  )
  const startsWithSlash = /^\/(?!\/)/
  const internal = startsWithApiUrl.test(to)
  const relative = startsWithSlash.test(to)

  // Use Gatsby Link for internal and relative links, and <a> for others
  if (relative) {
    return (
      <GatsbyLink
        to={`${to}/`}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }

  if (internal) {
    const slug = `/${to.split("/").slice(3).join("/")}`
    return (
      <GatsbyLink
        to={slug}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={to} {...other}>
      {children}
    </a>
  )
}

export default Link
