import React from "react"
import { Link } from "gatsby"

const Logo = () => {
  return (
    <span className="logo">
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Abstract UI
      </Link>
    </span>
  )
}

export default Logo
