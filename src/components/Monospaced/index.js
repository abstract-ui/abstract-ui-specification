import React from "react"
import styled from "@emotion/styled"

const Root = styled.span`
  font-family: "Roboto Mono", monospace;
  font-weight: 400;
`

const Monospaced = ({ children }) => {
  return <Root>{children}</Root>
}

export default Monospaced
