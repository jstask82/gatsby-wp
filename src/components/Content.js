import React from "react"
import { Link } from "gatsby"
import * as he from "he"
import parse from "html-react-parser"

export default function Content({ context }) {
  return (
    <>
      <h1>
        {
          //Set Title and decode HTML Entities
          he.decode(context.title)
        }
      </h1>
      {
        //Parse Content HTML
        parse(context.content, {
          replace: function (domNode) {
            //Replace internal links with <Link> component
            //TODO Read baseUrl from gatsby config
            const baseUrl = /gatsbywordpress.local/
            if (domNode.attribs && baseUrl.test(domNode.attribs.href)) {
              const slug = `/${domNode.attribs.href
                .split("/")
                .slice(3)
                .join("/")}`
              return <Link to={{ slug }}>{domNode.children[0].data}</Link>
            }
          },
        })
      }
    </>
  )
}
