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
      <DocumentTitle title="Style Property interface &mdash; Abstract UI" />

      <header>
        <CenteredColumn>
          <Logo />
        </CenteredColumn>
      </header>

      <main>
        <TitleBar>
          <CenteredColumn>
            <h1>
              interface <Text variant="interface-name">Style Property</Text>
            </h1>
          </CenteredColumn>
        </TitleBar>

        <BreadcrumbsBar>
          <CenteredColumn>
            <Link to="/interfaces">Interfaces</Link>
            &nbsp;&nbsp;<strong>&raquo;</strong>&nbsp;&nbsp;
            <Link to="/interfaces/interface-Style-Property">
              interface Style Property
            </Link>
          </CenteredColumn>
        </BreadcrumbsBar>

        <CenteredColumn>
          <ContentSection>
            <h2>Overview</h2>
            <p>
              A Style Property primitive represents a declaration of style for a{" "}
              <Link
                variant="primitive-name"
                to="/interfaces/raw-interface-Styleable"
              >
                Styleable
              </Link>{" "}
              primitive.
            </p>
          </ContentSection>

          <hr />

          <ContentSection>
            <h2>Attributes</h2>

            <h3>
              <Text variant="interface-attribute-name">name</Text>
            </h3>
            <p>The name of the style property.</p>

            <h3>
              <Text variant="interface-attribute-name">value</Text>
            </h3>
            <p>The value of the style property.</p>
          </ContentSection>
        </CenteredColumn>
      </main>
    </>
  )
}

export default Page
