import React from "react"
import { Helmet } from "react-helmet"
import Header from "components/Header"
import Footer from "components/Footer"
import BreadcrumbsBar from "components/BreadcrumbsBar"
import Content from "components/Content"
import CenteredColumn from "components/CenteredColumn"
import TitleBar from "components/TitleBar"

import ContentLayout from "components/ContentLayout"
import PageBody from "components/PageBody"
import PageToC from "components/PageToC"
import PageSidebar from "components/PageSidebar"

import HorizontalDivider from "components/HorizontalDivider"
import H1 from "components/H1"
import H2 from "components/H2"
import H3 from "components/H3"
import H4 from "components/H4"
import P from "components/P"
import SemanticText from "components/SemanticText"
import StabilityRating from "components/StabilityRating"
import Link from "components/Link"

const Attributes = () => {
  return (
    <>
      <Helmet>
        <title>Project interface &mdash; Abstract UI</title>
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
              interface <SemanticText variant="interface">Project</SemanticText>
              &nbsp;
              <SemanticText variant="interface property">
                &rarr; name
              </SemanticText>
            </H1>
          </CenteredColumn>
        </TitleBar>

        <BreadcrumbsBar>
          <CenteredColumn>
            <span style={{ color: "darkblue" }}>
              <Link to="/">Interfaces</Link>
              &nbsp;&nbsp;<strong>&rsaquo;</strong>&nbsp;&nbsp;
              <Link to="/">interface Project</Link>
            </span>
          </CenteredColumn>
        </BreadcrumbsBar>

        <CenteredColumn>
          <ContentLayout>
            <PageBody>
              <P>A project name.</P>
            </PageBody>
            <PageToC>ToC</PageToC>
          </ContentLayout>
        </CenteredColumn>
      </Content>

      <Footer />
    </>
  )
}

export default Attributes
