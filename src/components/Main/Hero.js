import React from "react"
import Img from "gatsby-image"
import css from "./Hero.module.scss"
import { Link as GatsbyLink } from "gatsby"
import Link from "../common/Link"
import capitalize from "../common/capitalize"
import decodeHtmlEntity from "../common/decodeHtmlEntity"

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
export default function Hero({ sub = "Lorem Ipsum dolor sit amet", context }) {
  const img = context.featured_media?.localFile?.childImageSharp?.fluid
  const { title, path } = context
  const decodedTitle = decodeHtmlEntity(title)
  const breadcrumbs = path
    .split("/")
    .filter(path => path.length > 0)
    .map((crumb, i) => {
      return {
        path: `${process.env.FULL_BASE_URL}/${crumb}`,
        name: decodedTitle,
        id: i,
      }
    })

  return (
    <section className={css.hero}>
      <div className={css["background-img"]}>
        {!img ? (
          <svg
            className={css["background-img__content"]}
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
          >
            <path fill="#fc3d03" d="M0 0h1920v1080H0z" />
            <ellipse
              cx="1712"
              cy="731"
              rx="902"
              ry="753"
              fill="url(#_Linear1)"
            />
            <ellipse
              cx="-241"
              cy="539.5"
              rx="787"
              ry="690.5"
              fill="url(#_Linear2)"
            />
            <defs>
              <linearGradient
                id="_Linear1"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(850 0 0 850 810 641)"
              >
                <stop offset="0" stopColor="#fd6435" />
                <stop offset="1" stopColor="#fd6435" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="_Linear2"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(-794 0 0 -794 546 568)"
              >
                <stop offset="0" stopColor="#fd6435" />
                <stop offset="1" stopColor="#fd6435" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        ) : (
          <Img
            style={{ position: "" }}
            fluid={img}
            className={css["background-img__content"]}
          />
        )}
      </div>
      <div className={`${css.wrapper}`}>
        <Heading title={decodedTitle} />
        <nav className={css.breadcrumb}>
          <GatsbyLink to="/">Home</GatsbyLink>{" "}
          {breadcrumbs.length > 0 ? " / " : ""}
          {breadcrumbs.map(crumb => (
            <Link to={crumb.path} key={crumb.id}>
              {capitalize(crumb.name)}
            </Link>
          ))}
        </nav>
        <Sub title={decodedTitle} sub={sub} />
      </div>
    </section>
  )
}
