import React from "react"
import css from "./Footer.module.scss"
import FooterMenu from "./FooterMenu"

function Footer() {
  // TODO: Footer Copyight sourcing from CMS
  return (
    <footer className={css.footer}>
      <div className={`${css.wrapper} ${css["wrapper--footer"]}`}>
        <FooterMenu />
        <p className={css.footer__copyright}>
          Design und Umsetzung &#169; 2020 Aaron Kessler
        </p>
      </div>
    </footer>
  )
}

export default Footer
