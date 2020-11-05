/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import wrapWithProvider from "./wrap-with-provider"
export const wrapRootElement = wrapWithProvider
export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!("IntersectionObserver" in window)) {
    require("intersection-observer")
    console.log("# IntersectionObserver is polyfilled!")
  }
}
