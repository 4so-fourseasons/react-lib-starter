import { configure } from '@storybook/react'

const loadStories = () => {
  require('../src/ExampleButton.stories.jsx')
}

configure(loadStories, module)
