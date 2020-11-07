import React from "react"
import Img from "gatsby-image"
import css from "./Hero.module.scss"
import Link from "../common/Link"
import capitalize from "../common/capitalize"

function Heading({ title }) {
  return title === undefined ? null : (
    <h1 className={css.hero__heading}>{title}</h1>
  )
}

function Sub({ title, sub }) {
  return title === undefined ? (
    <h1 className={`${css.hero__text} ${css.likeh2}`}>{sub}</h1>
  ) : (
    <h2 className={css.hero__text}>{sub}</h2>
  )
}
/* TODO
1. Source image and Text from Wordpress (ACF and featured image),
2. Define fallback-Image
3. Source breadcrumb from url-bar
*/
export default function Hero({
  path,
  title = "Hallo Welt",
  sub = "Lorem Ipsum dolor sit amet",
  img,
}) {
  console.log(img)
  return (
    <section className={css.hero}>
      <div className={css["background-img"]}>
        {!img ? (
          <div className={css["background-img__content"]}>
            Picture not found
          </div>
        ) : (
          <Img
            style={{ position: "" }}
            fluid={img}
            className={css["background-img__content"]}
          />
        )}
      </div>
      <div className={`${css.wrapper}`}>
        <Heading title={title} />
        <nav className={css.breadcrumb}>
          <Link to="">Home</Link> {path === "" || undefined ? "" : "/"}{" "}
          {path === "" || undefined ? null : (
            <Link to={`/${path}`}>{capitalize(path)}</Link>
          )}
        </nav>
        <Sub title={title} sub={sub} />
      </div>
    </section>
  )
}
