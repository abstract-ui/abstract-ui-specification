import React from "react"
import { Helmet } from "react-helmet"
import Header from "components/Header"
import Footer from "components/Footer"
import BreadcrumbsBar from "components/BreadcrumbsBar"
import Content from "components/Content"
import CenteredColumn from "components/CenteredColumn"
import TitleBar from "components/TitleBar"
import HorizontalDivider from "components/HorizontalDivider"
import H1 from "components/H1"
import H2 from "components/H2"
import H3 from "components/H3"
import P from "components/P"
import SemanticText from "components/SemanticText"
import StabilityRating from "components/StabilityRating"
import Link from "components/Link"

const Project = () => {
  return (
    <>
      <Helmet>
        <title>Abstract UI - "Project" interface</title>
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
            <H1>
              <SemanticText variant="interface">interface</SemanticText> Project
            </H1>
          </CenteredColumn>
        </TitleBar>

        <BreadcrumbsBar>
          <CenteredColumn>
            <span style={{ color: "darkblue" }}>
              <Link to="/">Interfaces</Link>
              &nbsp;&nbsp;<strong>&rsaquo;</strong>&nbsp;&nbsp;
              <Link to="/">Project</Link>
            </span>
          </CenteredColumn>
        </BreadcrumbsBar>

        <CenteredColumn>
          <P>The Project interface represents an Abstract UI project.</P>

          <HorizontalDivider />

          <H2>Properties</H2>
          <H3>
            <SemanticText variant="interface property">
              &rarr; name
            </SemanticText>
          </H3>
          <P>
            <SemanticText variant="data type">
              <Link to="/">&lt;string&gt;</Link>
            </SemanticText>
          </P>
          <P>The name of the project.</P>

          <H3>
            <SemanticText variant="interface property">
              &rarr; description
            </SemanticText>
          </H3>
          <P>
            <SemanticText variant="data type">&lt;string&gt;</SemanticText>
          </P>
          <P>The description of the project.</P>

          <H3>
            <SemanticText variant="interface property">
              &rarr; user interfaces
            </SemanticText>
          </H3>
          <P>
            <SemanticText variant="monospaced">
              [<SemanticText variant="primitive">UserInterface</SemanticText>]
            </SemanticText>
          </P>
          <P>A list of user interfaces.</P>

          <H3>
            <SemanticText variant="interface property">
              &rarr; tokens
            </SemanticText>
          </H3>
          <P>
            <SemanticText variant="monospaced">
              [
              <SemanticText variant="primitive">
                <Link to="/">Token</Link>
              </SemanticText>
              ]
            </SemanticText>
          </P>
          <P>A list of tokens.</P>

          <HorizontalDivider />

          <H2>Ancestry</H2>
          <P>
            <em>none</em>
          </P>

          <HorizontalDivider />

          <H2>Stability</H2>
          <P>
            <StabilityRating level={1} />
          </P>
        </CenteredColumn>
      </Content>

      <Footer />
    </>
  )
}

export default Project
