import React from "react"
import { Helmet } from "react-helmet"
import Header from "components/Header"
import Content from "components/Content"
import CenteredColumn from "components/CenteredColumn"
import TitleBar from "components/TitleBar"
import HorizontalDivider from "components/HorizontalDivider"
import H1 from "components/H1"
import H2 from "components/H2"
import H3 from "components/H3"
import P from "components/P"
import InterfaceText from "components/InterfaceText"
import DataTypeText from "components/DataTypeText"

const Project = () => {
  return (
    <>
      <Helmet>
        <title>Abstract UI - "Project" interface</title>
      </Helmet>

      <Header />

      <Content>
        <TitleBar>
          <CenteredColumn>
            <H1>
              <InterfaceText>interface</InterfaceText> Project
            </H1>
          </CenteredColumn>
        </TitleBar>
        <CenteredColumn>
          <P>The Project interface represents an Abstract UI project.</P>

          <HorizontalDivider />

          <H2>Properties</H2>
          <H3>name</H3>
          <P>
            <DataTypeText>&lt;string&gt;</DataTypeText>
          </P>
          <P>The name of the project.</P>

          <H3>description</H3>
          <P>
            <DataTypeText>&lt;string&gt;</DataTypeText>
          </P>
          <P>The description of the project.</P>

          <H3>user interface</H3>
          <P>
            <DataTypeText>?UserInterface</DataTypeText>
          </P>
          <P>A user interface.</P>

          <H3>tokens</H3>
          <P>
            <DataTypeText>[Token]</DataTypeText>
          </P>
          <P>A list of tokens.</P>
        </CenteredColumn>
      </Content>
    </>
  )
}

export default Project
