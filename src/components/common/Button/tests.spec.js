import React from 'react'
import { shallow } from 'enzyme'

import Button from './'

describe('Button', () => {
  let component
  let props

  beforeEach(() => {
    props = {
      onClick: jest.fn(),
      text: 'ButtonText',
      type: 'success',
    }
  })

  it('renders as a "success" button', () => {
    component = shallow(<Button {...props} />)
    expect(component.hasClass('bookly-button')).toBeTruthy()
    expect(component.hasClass('button-success')).toBeTruthy()
  })

  it('renders the correct text', () => {
    component = shallow(<Button {...props} />)
    expect(component.text()).toEqual(props.text)
  })
})
