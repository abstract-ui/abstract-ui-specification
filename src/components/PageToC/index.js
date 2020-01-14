import React from "react"
import styled from "@emotion/styled"

const Root = styled.aside`
  grid-area: 1 / 1 / 2 / 2;
`

const PageToC = ({ children }) => {
  return <Root>{children}</Root>
}

export default PageToC
