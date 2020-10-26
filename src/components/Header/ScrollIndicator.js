import React from "react"
import { connect } from "react-redux"
import css from "./ScrollIndicator.module.scss"

function ScrollIndicator({ size }) {
  const indicatorWidthStyle = {
    width: `${size}%`,
  }

  return (
    <div className={css["scroll-indicator"]} style={indicatorWidthStyle}></div>
  )
}

const mapStateToProps = state => {
  return {
    size: state.scrollIndicator.size,
  }
}
export default connect(mapStateToProps)(ScrollIndicator)
