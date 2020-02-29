import React from "react"
import styled from "@emotion/styled"

const Interface = styled.span`
  color: #cc6677;
`

const DataType = styled.span`
  font-family: "Roboto Mono", monospace;
  font-weight: 400;
  color: green;
  background-color: lightgreen;
  border-radius: 2px;
  padding: 0 3px;
`

const Stability = styled.span`
  font-weight: 700;
`

const Primitive = styled.span`
  font-family: "Roboto Mono", monospace;
  font-weight: 400;
  color: white;
  background-color: palevioletred;
  border-radius: 2px;
  padding: 0 3px;
`

const Monospaced = styled.span`
  font-family: "Roboto Mono", monospace;
  font-weight: 400;
`

const InterfaceProperty = styled.span`
  color: lightgreen;
  text-shadow: 0 2px 1px hsla(0, 0%, 0%, 50%);
  ${"" /* border-bottom: 2px dotted darkviolet; */}
`

const InterfaceOperation = styled.span`
  color: deepskyblue;
  text-shadow: 0 2px 1px hsla(0, 0%, 0%, 50%);
  ${"" /* border-bottom: 2px dotted forestgreen; */}
`

const SemanticText = ({ variant, children }) => {
  switch (variant) {
    case "interface":
      return <Interface>{children}</Interface>
    case "data type":
      return <DataType>{children}</DataType>
    case "stability":
      return <Stability>{children}</Stability>
    case "primitive":
      return <Primitive>{children}</Primitive>
    case "monospaced":
      return <Monospaced>{children}</Monospaced>
    case "interface property":
      return <InterfaceProperty>{children}</InterfaceProperty>
    case "interface operation":
      return <InterfaceOperation>{children}</InterfaceOperation>
    default:
      throw new Error(`Unknown <SemanticText> variant "${variant}"!`)
  }
}

export default SemanticText
