import React from "react"
import styled from "@emotion/styled"

const Root = styled.div`
  grid-area: 2 / 1 / 3 / 2;
`

const PageSidebar = ({ children }) => {
  return <Root>{children}</Root>
}

export default PageSidebar
