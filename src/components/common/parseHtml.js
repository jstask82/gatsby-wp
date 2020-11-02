import React from "react"
import parse from "html-react-parser"
import Link from "./Link"

export default function parseHtml(html) {
  const parsedHtml = parse(html, {
    replace: function (domNode) {
      /* 
      Replace internal links with <Link> component
      */
      if (domNode.attribs && domNode.attribs.href) {
        return <Link to={domNode.attribs.href}>{domNode.children[0].data}</Link>
      }
    },
  })
  return parsedHtml
}
