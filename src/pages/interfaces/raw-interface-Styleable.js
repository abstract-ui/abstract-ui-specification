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

const rawStyleable = () => {
  return (
    <>
      <Helmet>
        <title>Abstract UI - raw "Styleable" interface</title>
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
              <SemanticText variant="interface">raw interface</SemanticText>{" "}
              Styleable
            </H1>
          </CenteredColumn>
        </TitleBar>

        <BreadcrumbsBar>
          <CenteredColumn>
            <Link to="/">Interfaces</Link>
            &nbsp;&nbsp;<strong>&raquo;</strong>&nbsp;&nbsp;
            <Link to="/">Styleable</Link>
          </CenteredColumn>
        </BreadcrumbsBar>

        <CenteredColumn>
          <P>
            The Styleable raw interface is implemented by all primitives that
            can be styled using{" "}
            <SemanticText variant="primitive">
              <Link>StyleProperty</Link>
            </SemanticText>{" "}
            primitives.
          </P>

          <P>
            <StabilityRating level={1} />
          </P>

          <HorizontalDivider />

          <H2>Ancestry</H2>
          <P>
            <em>none</em>
          </P>

          <HorizontalDivider />

          <H2>Properties</H2>
          <H3>
            <SemanticText variant="interface property">
              &rarr; style properties
            </SemanticText>
          </H3>
          <P>
            <SemanticText variant="monospaced">
              [
              <SemanticText variant="primitive">
                <Link to="/">StyleProperty</Link>
              </SemanticText>
              ]
            </SemanticText>
          </P>
          <P>
            A list of style properties.{" "}
            <em>
              Each styleable primitive supports a particular list of style
              properties.
            </em>
          </P>

          <HorizontalDivider />

          <H2>Styleable primitives</H2>
          <P>
            Below is a list of all primitives that implement the Styleable
            interface.
          </P>
          <ul>
            <li>
              <SemanticText variant="primitive">
                <Link to="/">Box</Link>
              </SemanticText>
            </li>
            <li>
              <SemanticText variant="primitive">
                <Link to="/">Text</Link>
              </SemanticText>
            </li>
          </ul>
        </CenteredColumn>
      </Content>
    </>
  )
}

export default rawStyleable
