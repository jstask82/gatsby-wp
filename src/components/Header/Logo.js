import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useRef } from "react"
import { animateScroll as scroll } from "react-scroll"
import "./Logo.module.scss"

export default function Logo() {
  const ref = useRef()
  const handleKeypress = e => {
    //triggers by pressing 'enter' key
    if (e.key === "Enter") {
      ref.current.click()
    }
  }
  function logoClick() {
    scroll.scrollToTop()
  }
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

  const { source_url, title, alt_text } = logo.allWordpressWpLogo.nodes[0].url
  return (
    <div
      className={logoClass}
      ref={ref}
      onKeyPress={handleKeypress}
      onClick={logoClick}
      title="nach oben"
    >
      <Link to="/">
        <img src={source_url} title={title} alt={alt_text}></img>
      </Link>
    </div>
  )
}
