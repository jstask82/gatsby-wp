import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import css from "./Logo.module.scss"

const StyledLogo = styled.div`
  &::after {
    content: "${props => props.after}";
  }
`

function Logo({ small }) {
  const name = useStaticQuery(graphql`
    query {
      allWordpressSiteMetadata {
        edges {
          node {
            name
          }
        }
      }
    }
  `)

  const siteName = name.allWordpressSiteMetadata.edges[0].node.name

  return (
    <StyledLogo
      className={small ? css["logo-small"] : css.logo}
      after={siteName}
    >
      <Link to="/">{siteName}</Link>
    </StyledLogo>
  )
}

const mapStateToProps = state => {
  return {
    small: state.header.small,
  }
}

export default connect(mapStateToProps)(Logo)
