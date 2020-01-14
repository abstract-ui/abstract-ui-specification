import React from "react"
import styled from "@emotion/styled"

const Root = styled.div`
  grid-area: 1 / 2 / 3 / 3;
`

const PageBody = ({ children }) => {
  return <Root>{children}</Root>
}

export default PageBody
