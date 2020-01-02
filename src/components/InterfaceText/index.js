import React from "react"
import styled from "@emotion/styled"

const Root = styled.span`
  color: palevioletred;
`

const InterfaceText = ({ children }) => {
  return <Root>{children}</Root>
}

export default InterfaceText
