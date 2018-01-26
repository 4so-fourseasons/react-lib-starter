import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'

import README from './ExampleButton.README.md'
import ExampleButton from './ExampleButton'

storiesOf('ExampleButton', module)
  .add('Default', withDocs(
    README,
    () => (
      <ExampleButton>Click Me!</ExampleButton>
    ))
  )
