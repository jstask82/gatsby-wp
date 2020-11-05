import React, { useEffect } from "react"
import { connect } from "react-redux"
import {
  changeHeaderSize,
  updateScrollIndicator,
  changeBackToTopVisibility,
} from "../redux"
import SEO from "./seo"
import Header from "./Header"
import "./global.scss"
import css from "./Layout.module.scss"
import Footer from "./Footer/Footer"
import TopScroll from "./TopScroll"
import Hero from "./Main/Hero"

function Layout({
  children,
  changeHeaderSize,
  updateScrollIndicator,
  changeBackToTopVisibility,
}) {
  useEffect(() => {
    window.onscroll = () => {
      //Header size
      const scrollPos = 300
      const scrollPos2 = 600
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

      //ScrollIndicator
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      updateScrollIndicator(scrolled)

      //Back To Top Visibility
      if (
        document.body.scrollTop > scrollPos2 ||
        document.documentElement.scrollTop > scrollPos2
      ) {
        changeBackToTopVisibility(true)
      } else {
        changeBackToTopVisibility(false)
      }
    }
  }, [changeHeaderSize, updateScrollIndicator, changeBackToTopVisibility])
  return (
    <React.Fragment>
      <SEO title="default title" />
      <Header />
      <main className={css.main}>
        <Hero />
        <section className={css.content}>
          <div className={css.wrapper}>{children}</div>
        </section>
      </main>
      <Footer />
      <TopScroll />
    </React.Fragment>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    changeHeaderSize: paddingValue => dispatch(changeHeaderSize(paddingValue)),
    updateScrollIndicator: size => dispatch(updateScrollIndicator(size)),
    changeBackToTopVisibility: visible =>
      dispatch(changeBackToTopVisibility(visible)),
  }
}
export default connect(null, mapDispatchToProps)(Layout)
