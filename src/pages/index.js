import "../base.css"
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
            <Link to="/interfaces">Interfaces</Link>
          </ContentSection>
        </CenteredColumn>
      </main>
    </>
  )
}

export default Index
