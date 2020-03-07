import React from "react"
import DocumentTitle from "components/DocumentTitle"
import TitleBar from "components/TitleBar"
import Logo from "components/Logo"
import BreadcrumbsBar from "components/BreadcrumbsBar"
import CenteredColumn from "components/CenteredColumn"
import ContentSection from "components/ContentSection"
import Link from "components/Link"

const Interfaces = () => {
  return (
    <>
      <DocumentTitle title="Interfaces &mdash; Abstract UI" />

      <header>
        <CenteredColumn>
          <Logo />
        </CenteredColumn>
      </header>

      <main>
        <TitleBar>
          <CenteredColumn>
            <h1>Interfaces</h1>
          </CenteredColumn>
        </TitleBar>

        <BreadcrumbsBar>
          <CenteredColumn>
            <Link to="/interfaces">Interfaces</Link>
          </CenteredColumn>
        </BreadcrumbsBar>

        <CenteredColumn>
          <ContentSection>
            <h2>Interfaces</h2>
            <Link to="/interfaces/interface-Document">interface Document</Link>
            <br />
            <Link to="/interfaces/interface-Project">interface Project</Link>
            <br />
            <Link to="/interfaces/interface-Graphical-User-Interface">
              interface Graphical User Interface
            </Link>
            <br />
            <Link to="/interfaces/interface-Graphical-User-Interface-Body">
              interface Graphical User Interface Body
            </Link>
            <br />
            <Link to="/interfaces/interface-Rectangle">
              interface Rectangle
            </Link>
            <br />
            <Link to="/interfaces/interface-Text">interface Text</Link>
            <br />
            <Link to="/interfaces/interface-Style-Property">
              interface Style Property
            </Link>
            <br />
            <Link to="/interfaces/interface-Token">interface Token</Link>
            <br />
            <Link to="/interfaces/interface-Component">
              interface Component
            </Link>
            <br />
            <Link to="/interfaces/interface-Component-Instance">
              interface Component Instance
            </Link>
          </ContentSection>
          <ContentSection>
            <h2>Raw interfaces</h2>
            <Link to="/interfaces/raw-interface-Parent">
              raw interface Parent
            </Link>
            <br />
            <Link to="/interfaces/raw-interface-Child">
              raw interface Child
            </Link>
            <br />
            <Link to="/interfaces/raw-interface-Styleable">
              raw interface Styleable
            </Link>
            <br />
            <Link to="/interfaces/raw-interface-Element">
              raw interface Element
            </Link>
          </ContentSection>
        </CenteredColumn>
      </main>
    </>
  )
}

export default Interfaces
