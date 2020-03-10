import React from "react"
import DocumentTitle from "components/DocumentTitle"
import TitleBar from "components/TitleBar"
import Logo from "components/Logo"
import CenteredColumn from "components/CenteredColumn"
import ContentSection from "components/ContentSection"
import Link from "components/Link"

const Index = () => {
  return (
    <>
      <DocumentTitle title="Abstract UI Home" />

      <header>
        <CenteredColumn>
          <Logo />
        </CenteredColumn>
      </header>

      <main>
        <TitleBar>
          <CenteredColumn>
            <h1>Abstract UI Home</h1>
          </CenteredColumn>
        </TitleBar>

        <CenteredColumn>
          <ContentSection>
            <p>
              Abstract UI is a domain-specific modelling language that describes
              graphical user interfaces. Conceptually, a complete, well-formed
              Abstract UI "document" is a graph, every node of which is a
              semantically meaningful object referred to as an{" "}
              Abstract UI <strong>primitive</strong>.
            </p>
            <p>
              In Abstract UI, primitives are abstractions of graphical user
              interface concepts such as visual elements, styling, layout,
              animations, behavior, data manipulation and data fetching, as well
              as design concepts such as components, tokens and other elements
              of design systems.
            </p>
            <p>
              Abstract UI primitives are described using{" "}
              <Link to="/interfaces">interfaces</Link>.
            </p>
          </ContentSection>
        </CenteredColumn>
      </main>
    </>
  )
}

export default Index
