import React from "react"

export default function post({ pageContext }) {
  return (
    <div>
      <h1>{pageContext.title}</h1>
      {console.log(pageContext)}
    </div>
  )
}
