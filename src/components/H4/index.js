import React from "react"
import styled from "@emotion/styled"

const Root = styled.h4`
  font-family: "Roboto Slab", serif;
  font-size: 1.25em;
  font-weight: 700;
  margin-block-start: 2em;
`

const H4 = ({ children }) => {
  return <Root>{children}</Root>
}

export default H4
