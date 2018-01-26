import React from 'react'
import { shallow } from 'enzyme'

import ExampleButton from './ExampleButton'

describe('ExampleButton', () => {
  it('should render <button />', () => {
    const wrapper = shallow(<ExampleButton />)

    expect(wrapper.find('button').exists()).toBe(true)
  })
}) // end ExampleButton
