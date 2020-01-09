import "../base.css"
import React from "react"
import { Helmet } from "react-helmet"
import Header from "components/Header"
import Content from "components/Content"
import TitleBar from "components/TitleBar"
import CenteredColumn from "components/CenteredColumn"
import H1 from "components/H1"
import H2 from "components/H2"
import Link from "components/Link"

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Abstract UI - Home</title>
      </Helmet>

      <Header>
        <CenteredColumn>
          <span
            style={{
              fontSize: 25,
              fontWeight: 700,
              color: "#fff",
            }}
          >
            Abstract UI
          </span>
        </CenteredColumn>
      </Header>

      <Content>
        <TitleBar>
          <CenteredColumn>
            <H1>Abstract UI</H1>
          </CenteredColumn>
        </TitleBar>

        <CenteredColumn>
          <H2>Interfaces</H2>
          <Link to="/interfaces/raw-interface-Parent/">
            raw interface Parent
          </Link>
          <br />
          <Link to="/interfaces/raw-interface-Styleable/">
            raw interface Styleable
          </Link>
          <br />
          <Link to="/interfaces/interface-Project/">interface Project</Link>
        </CenteredColumn>
      </Content>
    </>
  )
}

export default Index
