import React from "react"
import styled from "@emotion/styled"
import { Link as GatsbyLink } from "gatsby"

const StyledGatsbyLink = styled(GatsbyLink)`
  color: inherit;
  text-decoration: none;
  :hover {
    color: blue;
    background-color: yellow;
    text-decoration: underline;
  }
  :active {
    color: white;
    background-color: black;
    text-decoration: none;
  }
`

const Link = ({ children, ...otherProps }) => {
  return <StyledGatsbyLink {...otherProps}>{children}</StyledGatsbyLink>
}

export default Link
