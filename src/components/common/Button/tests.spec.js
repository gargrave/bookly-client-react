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

  it('matches the snapshot', () => {
    component = shallow(<Button {...props} />)
    expect(component).toMatchSnapshot()
  })

  it('renders as a "success" button', () => {
    component = shallow(<Button {...props} />)
    expect(component.hasClass('bookly-button')).toBeTruthy()
    expect(component.hasClass('button-success')).toBeTruthy()
  })

  it('renders as a "secondary" button', () => {
    props.type = 'secondary'
    component = shallow(<Button {...props} />)
    expect(component.hasClass('bookly-button')).toBeTruthy()
    expect(component.hasClass('button-secondary')).toBeTruthy()
  })

  it('renders as a "info" button', () => {
    props.type = 'info'
    component = shallow(<Button {...props} />)
    expect(component.hasClass('bookly-button')).toBeTruthy()
    expect(component.hasClass('button-info')).toBeTruthy()
  })

  it('renders as a "warning" button', () => {
    props.type = 'warning'
    component = shallow(<Button {...props} />)
    expect(component.hasClass('bookly-button')).toBeTruthy()
    expect(component.hasClass('button-warning')).toBeTruthy()
  })

  it('renders as a "danger" button', () => {
    props.type = 'danger'
    component = shallow(<Button {...props} />)
    expect(component.hasClass('bookly-button')).toBeTruthy()
    expect(component.hasClass('button-danger')).toBeTruthy()
  })

  it('renders as a "light" button', () => {
    props.type = 'light'
    component = shallow(<Button {...props} />)
    expect(component.hasClass('bookly-button')).toBeTruthy()
    expect(component.hasClass('button-light')).toBeTruthy()
  })

  it('renders as a "dark" button', () => {
    props.type = 'dark'
    component = shallow(<Button {...props} />)
    expect(component.hasClass('bookly-button')).toBeTruthy()
    expect(component.hasClass('button-dark')).toBeTruthy()
  })

  it('renders the correct text', () => {
    component = shallow(<Button {...props} />)
    expect(component.text()).toEqual(props.text)
  })

  it('calls the callback as expected')
})
