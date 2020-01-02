import "../base.css"
import React from "react"
import { Helmet } from "react-helmet"
import Header from "components/Header"
import Content from "components/Content"
import TitleBar from "components/TitleBar"
import HorizontalDivider from "components/HorizontalDivider"
import H1 from "components/H1"
import H2 from "components/H2"
import { Link } from "gatsby"

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Abstract UI - Home</title>
      </Helmet>

      <Header />

      <Content>
        <TitleBar>
          <H1>Abstract UI</H1>
        </TitleBar>

        <HorizontalDivider />

        <H2>Interfaces</H2>

        <Link to="/interfaces/raw-Parent/">raw Parent</Link>
        <br />
        <Link to="/interfaces/raw-Styleable/">raw Styleable</Link>
        <br />
        <Link to="/interfaces/Project/">Project</Link>
      </Content>
    </>
  )
}

export default Index
