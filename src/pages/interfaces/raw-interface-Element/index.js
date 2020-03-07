import React from "react"
import DocumentTitle from "components/DocumentTitle"
import TitleBar from "components/TitleBar"
import Logo from "components/Logo"
import BreadcrumbsBar from "components/BreadcrumbsBar"
import CenteredColumn from "components/CenteredColumn"
import ContentSection from "components/ContentSection"
import Text from "components/Text"
import Link from "components/Link"

const Page = () => {
  return (
    <>
      <DocumentTitle title="Element raw interface &mdash; Abstract UI" />

      <header>
        <CenteredColumn>
          <Logo />
        </CenteredColumn>
      </header>

      <main>
        <TitleBar>
          <CenteredColumn>
            <h1>
              raw interface <Text variant="interface-name">Element</Text>
            </h1>
          </CenteredColumn>
        </TitleBar>

        <BreadcrumbsBar>
          <CenteredColumn>
            <Link to="/interfaces">Interfaces</Link>
            &nbsp;&nbsp;<strong>&raquo;</strong>&nbsp;&nbsp;
            <Link to="/interfaces/raw-interface-Element">
              raw interface Element
            </Link>
          </CenteredColumn>
        </BreadcrumbsBar>

        <CenteredColumn>
          <ContentSection>
            <h2>Overview</h2>
            <p>
              Element primitives are primitives that can can be styled using
              style properties and can act as both parent and children to other
              primitives.
            </p>
            <p>
              Inherits:{" "}
              <Link
                to="/interfaces/raw-interface-Styleable"
                variant="primitive-name"
              >
                Styleable
              </Link>{" "}
              <Link
                to="/interfaces/raw-interface-Child"
                variant="primitive-name"
              >
                Child
              </Link>{" "}
              <Link
                to="/interfaces/raw-interface-Parent"
                variant="primitive-name"
              >
                Parent
              </Link>
            </p>
          </ContentSection>
        </CenteredColumn>
      </main>
    </>
  )
}

export default Page
