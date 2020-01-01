import { configure } from "@storybook/react"

addParameters({
  options: {
    showPanel: false,
  },
})

// automatically import all files ending in *.stories.js
configure(require.context("../stories", true, /\.stories\.js$/), module)
