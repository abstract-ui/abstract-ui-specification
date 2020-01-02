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

const rawStyleable = () => {
  return (
    <>
      <Helmet>
        <title>Abstract UI - raw "Styleable" interface</title>
      </Helmet>

      <Header />

      <Content>
        <TitleBar>
          <H1>raw interface Styleable</H1>
        </TitleBar>
        <P>
          The Styleable raw interface is implemented by all primitives that can
          be styled with ||StyleProperty|| primitives.
        </P>

        <HorizontalDivider />

        <H2>Properties</H2>
        <H3>style properties</H3>
        <P>[ StyleProperty ]</P>
        <P>
          A list of ||StyleProperty|| primitives.&nbsp;
          <em>Each Styleable supports a particular list of StyleProperties.</em>
        </P>

        <HorizontalDivider />

        <H2>Styleable primitives</H2>
        <P>
          Below is a list of all primitives that implement the Styleable
          interface.
        </P>
        <ul>
          <li>Box</li>
          <li>Text</li>
        </ul>
      </Content>
    </>
  )
}

export default rawStyleable
