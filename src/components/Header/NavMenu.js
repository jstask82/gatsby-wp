import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useRef } from "react"
import { connect } from "react-redux"
import { toggleNavMenu } from "../../redux"
import decodeHtmlEntity from "../decodeHtmlEntity"
import css from "./Nav.module.scss"

function NavMenu({ toggleNavMenu, menuVisible }) {
  const ref = useRef()
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

  const toggleNavMenuHandle = () => {
    //toogle only if hamburger menu is present
    const width = window.matchMedia(`(min-width: ${css.desktopMenuBp})`)
    if (!width.matches) {
      toggleNavMenu()
      document.body.classList.toggle("stop-scroll")
    }
  }

  const handleNavBtnKeypress = e => {
    if (e.key === "Enter") {
      //ref.current.handleClick(ref.current)
      ref.current.click()
    }
  }
  return (
    <React.Fragment>
      <div
        role="button"
        className={css["navigation__button--outer"]}
        tabIndex="0"
        onClick={toggleNavMenuHandle}
        onKeyPress={handleNavBtnKeypress}
        ref={ref}
      >
        <div
          tabIndex="-1"
          className={
            menuVisible
              ? css.navigation__button + " " + css["navigation__button--active"]
              : css.navigation__button
          }
        >
          <span className={css.navigation__icon}>&nbsp;</span>
        </div>
      </div>
      <nav
        className={
          menuVisible
            ? css.navigation + " " + css["navigation--visible"]
            : css.navigation
        }
      >
        <ul className={css.navigation__list}>
          {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
            item => (
              <li className={css["navigation__list-item"]} key={item.object_id}>
                <Link
                  className={css["navigation__list-link"]}
                  to={`/${item.object_slug}`}
                >
                  {decodeHtmlEntity(item.title)}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    menuVisible: state.navMenu.menuVisible,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleNavMenu: () => dispatch(toggleNavMenu()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu)
