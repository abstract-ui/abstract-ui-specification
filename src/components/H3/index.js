import React from "react"
import styled from "@emotion/styled"

const Root = styled.h3`
  font-family: "Roboto Slab", serif;
  font-weight: 700;
`

const H3 = ({ children }) => {
  return <Root>{children}</Root>
}

export default H3
