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
      <DocumentTitle title="Project interface &mdash; Abstract UI" />

      <header>
        <CenteredColumn>
          <Logo />
        </CenteredColumn>
      </header>

      <main>
        <TitleBar>
          <CenteredColumn>
            <h1>
              interface <Text variant="interface-name">Project</Text>
            </h1>
          </CenteredColumn>
        </TitleBar>

        <BreadcrumbsBar>
          <CenteredColumn>
            <Link to="/interfaces">Interfaces</Link>
            &nbsp;&nbsp;<strong>&raquo;</strong>&nbsp;&nbsp;
            <Link to="/interfaces/interface-Project">interface Project</Link>
          </CenteredColumn>
        </BreadcrumbsBar>

        <CenteredColumn>
          <ContentSection>
            <h2>Overview</h2>
            <p>
              A Project primitive represents a container for one or more
              graphical user interfaces as well as design system elements.
            </p>
          </ContentSection>

          <hr />

          <ContentSection>
            <h2>Attributes</h2>

            <h3>
              <Text variant="interface-attribute-name">name</Text>
            </h3>
            <p>The name of the project.</p>

            <h3>
              <Text variant="interface-attribute-name">description</Text>
            </h3>
            <p>The description of the project.</p>

            <h3>
              <Text variant="interface-attribute-name">
                graphical user interfaces
              </Text>
            </h3>
            <p>
              A list of{" "}
              <Link
                to="/interfaces/interface-Graphical-User-Interface"
                variant="primitive-name"
              >
                Graphical User Interfaces
              </Link>
              .
            </p>

            <h3>
              <Text variant="interface-attribute-name">tokens</Text>
            </h3>
            <p>
              A list of{" "}
              <Link to="/interfaces/interface-Token" variant="primitive-name">
                Tokens
              </Link>
              .
            </p>
          </ContentSection>

          <hr />

          <ContentSection>
            <h2>Operations</h2>

            <h3>
              <Text variant="interface-operation-name">set name</Text>
            </h3>
            <p>Sets the project's name.</p>

            <h3>
              <Text variant="interface-operation-name">set description</Text>
            </h3>
            <p>Sets the project's description.</p>

            <h3>
              <Text variant="interface-operation-name">append token</Text>
            </h3>
            <p>
              Adds a new{" "}
              <Link to="/interfaces/interface-Token" variant="primitive-name">
                Token
              </Link>{" "}
              to the end of the project's list of tokens.
            </p>
          </ContentSection>
        </CenteredColumn>
      </main>
    </>
  )
}

export default Page
