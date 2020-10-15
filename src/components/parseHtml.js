import React from "react"
import parse from "html-react-parser"
import { Link } from "gatsby"

export default function parseHtml(html) {
  const parsedHtml = parse(html, {
    replace: function (domNode) {
      /* 
      Replace internal links with <Link> component
      TODO
      1. Check if searchAndReplaceContentUrls in gatsby config will also do it.
      2. Read baseUrl from gatsby config.
      */

      const baseUrl = /gatsbywordpress.local/
      if (domNode.attribs && baseUrl.test(domNode.attribs.href)) {
        const slug = `/${domNode.attribs.href.split("/").slice(3).join("/")}`
        return <Link to={{ slug }}>{domNode.children[0].data}</Link>
      }
    },
  })
  return parsedHtml
}
