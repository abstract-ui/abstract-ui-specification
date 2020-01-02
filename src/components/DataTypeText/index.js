import React from "react"
import styled from "@emotion/styled"

const Root = styled.span`
  font-family: "Roboto Mono", monospace;
  font-weight: 400;
  color: green;
  background-color: lightgreen;
  border-radius: 2px;
  padding: 0 3px;
`

const DataTypeText = ({ children }) => {
  return <Root>{children}</Root>
}

export default DataTypeText
