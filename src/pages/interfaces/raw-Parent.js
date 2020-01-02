import React from "react"
import { Helmet } from "react-helmet"
import Header from "components/Header"
import Content from "components/Content"
import TitleBar from "components/TitleBar"
import HorizontalDivider from "components/HorizontalDivider"
import H1 from "components/H1"
import H2 from "components/H2"
import H3 from "components/H3"
import P from "components/P"
import Monospaced from "components/Monospaced"

const rawParent = () => {
  return (
    <>
      <Helmet>
        <title>Abstract UI - raw "Parent" interface</title>
      </Helmet>

      <Header />

      <Content>
        <TitleBar>
          <H1>raw interface Parent</H1>
        </TitleBar>
        <P>
          The Parent raw interface is implemented by all primitives that can
          have other primitives as children. This parent-child relationship is
          the mechanism by which hierarchies of "elements" (and primitives that
          are reducible to elements) is described.
        </P>

        <HorizontalDivider />

        <H2>Properties</H2>
        <H3>children</H3>
        <P>
          <Monospaced>[(Child)]</Monospaced>
        </P>
        <P>
          The "children" property is a list of primitives that implement the
          ||Child|| interface.
        </P>

        <HorizontalDivider />

        <H2>Parent primitives</H2>
        <P>
          Below is a list of all primitives that implement the Parent interface.
        </P>
        <ul>
          <li>UserInterfaceBody</li>
          <li>Box</li>
        </ul>
      </Content>
    </>
  )
}

export default rawParent
