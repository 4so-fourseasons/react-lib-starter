import React from 'react'
import styled from 'styled-components'

const ExampleButton = styled.button`
  background: ${props => props.background ? props.background : '#c9022f'};
  color: white;
`

export default ExampleButton
