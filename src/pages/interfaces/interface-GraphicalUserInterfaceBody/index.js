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
      <DocumentTitle title="GraphicalUserInterfaceBody interface &mdash; Abstract UI" />

      <header>
        <CenteredColumn>
          <Logo />
        </CenteredColumn>
      </header>

      <main>
        <TitleBar>
          <CenteredColumn>
            <h1>
              interface{" "}
              <Text variant="interface-name">GraphicalUserInterfaceBody</Text>
            </h1>
          </CenteredColumn>
        </TitleBar>

        <BreadcrumbsBar>
          <CenteredColumn>
            <Link to="/interfaces">Interfaces</Link>
            &nbsp;&nbsp;<strong>&raquo;</strong>&nbsp;&nbsp;
            <Link to="/interfaces/interface-GraphicalUserInterfaceBody">
              interface GraphicalUserInterfaceBody
            </Link>
          </CenteredColumn>
        </BreadcrumbsBar>

        <CenteredColumn>
          <ContentSection>
            <h2>Overview</h2>
            <p>
              A GraphicalUserInterfaceBody primitive represents a container for
              the element graph of a graphical user interface.
            </p>
            <p>
              Inerits:{" "}
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
