import React from "react"

const Text = ({ children, variant }) => {
  return <span className={`text-variant-${variant}`}>{children}</span>
}

export default Text
