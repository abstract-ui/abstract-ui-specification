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
      <DocumentTitle title="Document interface &mdash; Abstract UI" />

      <header>
        <CenteredColumn>
          <Logo />
        </CenteredColumn>
      </header>

      <main>
        <TitleBar>
          <CenteredColumn>
            <h1>
              interface <Text variant="interface-name">Document</Text>
            </h1>
          </CenteredColumn>
        </TitleBar>

        <BreadcrumbsBar>
          <CenteredColumn>
            <Link to="/interfaces">Interfaces</Link>
            &nbsp;&nbsp;<strong>&raquo;</strong>&nbsp;&nbsp;
            <Link to="/interfaces/interface-Project">interface Document</Link>
          </CenteredColumn>
        </BreadcrumbsBar>

        <CenteredColumn>
          <ContentSection>
            <h2>Overview</h2>
            <p>
              A Document represents the primary node in an Abstract UI graph and
              serves as a carrier for critical metadata such as the Abstract UI
              version implemented by graph.
            </p>
          </ContentSection>

          <hr />

          <ContentSection>
            <h2>Attributes</h2>

            <h3>
              <Text variant="interface-attribute-name">language version</Text>
            </h3>
            <p>The Abstract UI version of the graph.</p>

            <h3>
              <Text variant="interface-attribute-name">project</Text>
            </h3>
            <p>
              The{" "}
              <Link to="/interfaces/interface-Project" variant="primitive-name">
                Project
              </Link>{" "}
              in this document.
            </p>
          </ContentSection>
        </CenteredColumn>
      </main>
    </>
  )
}

export default Page
