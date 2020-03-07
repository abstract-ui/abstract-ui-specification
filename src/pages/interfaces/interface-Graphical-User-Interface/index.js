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
      <DocumentTitle title="Graphical User Interface interface &mdash; Abstract UI" />

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
              <Text variant="interface-name">Graphical User Interface</Text>
            </h1>
          </CenteredColumn>
        </TitleBar>

        <BreadcrumbsBar>
          <CenteredColumn>
            <Link to="/interfaces">Interfaces</Link>
            &nbsp;&nbsp;<strong>&raquo;</strong>&nbsp;&nbsp;
            <Link to="/interfaces/interface-Graphical-User-Interface">
              interface Graphical User Interface
            </Link>
          </CenteredColumn>
        </BreadcrumbsBar>

        <CenteredColumn>
          <ContentSection>
            <h2>Overview</h2>
            <p>
              A Graphical User Interface primitive represents a complete
              graphical user interface.
            </p>
          </ContentSection>

          <hr />

          <ContentSection>
            <h2>Attributes</h2>

            <h3>
              <Text variant="interface-attribute-name">name</Text>
            </h3>
            <p>The name of the user interface.</p>

            <h3>
              <Text variant="interface-attribute-name">description</Text>
            </h3>
            <p>The description of the user interface.</p>

            <h3>
              <Text variant="interface-attribute-name">body</Text>
            </h3>
            <p>
              A{" "}
              <Link
                to="/interfaces/interface-GraphicalUserInterfaceBody"
                variant="primitive-name"
              >
                GraphicalUserInterfaceBody
              </Link>
              .
            </p>
          </ContentSection>
        </CenteredColumn>
      </main>
    </>
  )
}

export default Page
