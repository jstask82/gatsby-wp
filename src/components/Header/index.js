import React from "react"
import { connect } from "react-redux"
import Logo from "./Logo"
import NavMenu from "../Header/NavMenu"
import css from "./Header.module.scss"
import ScrollIndicator from "./ScrollIndicator"

function Header({ padding }) {
  const paddingStyle = {
    paddingTop: `${padding}em`,
    paddingBottom: `${padding}em`,
  }

  return (
    <header className={css.header}>
      <div
        className={`${css.wrapper} ${css["wrapper--header"]}`}
        style={paddingStyle}
      >
        <Logo />
        <NavMenu />
      </div>
      <ScrollIndicator />
    </header>
  )
}

const mapStateToProps = state => {
  return {
    padding: state.header.padding,
  }
}

export default connect(mapStateToProps)(Header)
