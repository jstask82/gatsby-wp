import React, { useEffect } from "react"
import { connect } from "react-redux"
import { changeHeaderSize } from "../redux"
import SEO from "./seo"
import Header from "./Header"
import Main from "./Main"
import "./Layout.scss"

function Layout({ children, changeHeaderSize }) {
  useEffect(() => {
    window.onscroll = () => {
      //Header size
      const scrollPos = 300
      if (
        document.body.scrollTop > scrollPos ||
        document.documentElement.scrollTop > scrollPos
      ) {
        changeHeaderSize("0")
      } else if (
        document.body.scrollTop <= scrollPos ||
        document.documentElement.scrollTop <= scrollPos
      ) {
        changeHeaderSize("1")
      }

      // //ScrollIndicator
      // const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      // const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      // const scrolled = (winScroll / height) * 100;
      // setIndicatorWidth(scrolled);

      // //Back To Top Visibility
      // if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
      //   setBackToTopBtnVisible(true);
      // } else {
      //   setHeaderSize({ padding: '1', logoClass: logoCss.logo, navClass: navCss.navigation });
      //   setBackToTopBtnVisible(false);
      // }
    }
  }, [changeHeaderSize])
  return (
    <React.Fragment>
      <SEO title="default title" />
      <Header />
      <Main childs={children} />
      <button onClick={() => changeHeaderSize("4")}>
        change headerpadding to 4
      </button>
      {/*Footer*/}
    </React.Fragment>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    changeHeaderSize: paddingValue => dispatch(changeHeaderSize(paddingValue)),
  }
}
export default connect(null, mapDispatchToProps)(Layout)
