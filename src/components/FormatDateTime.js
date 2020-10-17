import React from "react"

export default function FormatDateTime({ date }) {
  const formattedDateTime =
    new Date(date)
      .toLocaleString("de-DE", {
        timeZone: "UTC",
      })
      .split(",")
      .join(" um")
      .split(":")
      .slice(0, -1)
      .join(":") + " Uhr"

  return <time dateTime={date}>{formattedDateTime}</time>
}
