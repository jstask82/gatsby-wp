import React from "react"
import { connect } from "react-redux"
import NavMenu from "../Header/NavMenu"
import css from "./Header.module.scss"

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
        <NavMenu />
      </div>
    </header>
  )
}

const mapStateToProps = state => {
  return {
    padding: state.header.padding,
  }
}

export default connect(mapStateToProps)(Header)