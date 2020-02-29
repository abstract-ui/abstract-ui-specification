import React from "react"
import { Link as GatsbyLink } from "gatsby"
import classnames from "classnames"

const Link = ({ children, variant, ...otherProps }) => {
  return (
    <GatsbyLink
      className={classnames(
        {
          link: true,
          variant: Boolean(variant),
        },
        variant
      )}
      {...otherProps}
    >
      {children}
    </GatsbyLink>
  )
}

export default Link
