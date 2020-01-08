import React from "react"
import styled from "@emotion/styled"

const Root = styled.h1`
  font-family: "Roboto Slab", serif;
  font-size: 2.8em;
  font-weight: 700;
`

const H1 = ({ children }) => {
  return <Root>{children}</Root>
}

export default H1
