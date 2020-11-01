import { useEffect } from "react"
// import { useLocation } from "react-router-dom"

export default function TopScrollPos() {
  // const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    console.log("TopScroll Component fired")
  }, []) //[pathname]

  return null
}
