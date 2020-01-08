import React from "react"
import styled from "@emotion/styled"

const Root = styled.h3`
  font-family: "Roboto Slab", serif;
  font-size: 1.5em;
  font-weight: 700;
  margin-block-start: 2em;
`

const H3 = ({ children }) => {
  return <Root>{children}</Root>
}

export default H3
