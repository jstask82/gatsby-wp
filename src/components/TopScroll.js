import React, { useRef } from "react"
import { connect } from "react-redux"
import { animateScroll as scroll } from "react-scroll"
import css from "./TopScroll.module.scss"

function TopScroll({ scrollToTopVisible }) {
  const ref = useRef()
  const handleKeypress = e => {
    //triggers by pressing 'enter' key
    if (e.key === "Enter") {
      ref.current.click()
    }
  }
  function handleClick() {
    scroll.scrollToTop()
  }

  return (
    <div>
      <div className={`${css.wrapper} ${css["wrapper--back-to-top"]}`}>
        <div
          role="button"
          tabIndex="0"
          ref={ref}
          onKeyPress={handleKeypress}
          onClick={handleClick}
          title="nach oben"
          className={
            scrollToTopVisible
              ? `${css["back-to-top__btn"]} ${css["back-to-top__btn--visible"]}`
              : css["back-to-top__btn"]
          }
        >
          <span tabIndex="-1">Nach oben</span>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    scrollToTopVisible: state.scrollToTop.visible,
  }
}

export default connect(mapStateToProps)(TopScroll)
