import React from "react"

const DocumentTitle = ({ title }) => {
  React.useEffect(() => {
    document.title = title
  }, [title])
  return null
}

export default DocumentTitle
