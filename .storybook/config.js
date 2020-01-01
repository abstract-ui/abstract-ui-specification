import { addParameters, configure } from "@storybook/react"
import { themes } from "@storybook/theming"

addParameters({
  options: {
    showPanel: false,
    theme: themes.light,
  },
})

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.js$/), module)
