import React from "react"
import styled from "@emotion/styled"

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`

const ContentLayout = ({ children }) => {
  return <Root>{children}</Root>
}

export default ContentLayout
