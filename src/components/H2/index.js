import React from "react"
import styled from "@emotion/styled"

const Root = styled.h2`
  font-family: "Roboto Slab", serif;
  font-size: 2em;
  font-weight: 700;
  line-height: 1em;
  margin-block-start: 1.5em;
  border-left: 7px solid;
  padding-left: 0.3em;
`

const H2 = ({ children }) => {
  return <Root>{children}</Root>
}

export default H2
