import React from 'react'
import { shallow } from 'enzyme'

import Card from './'

describe('Card', () => {
  let component
  let props

  beforeEach(() => {
    props = {
      classes: [],
      hoverable: true,
      onClick: jest.fn(),
      text: 'this is the text',
      title: 'Awesome Title',
    }
  })

  it('renders correctly', () => {
    component = shallow(<Card {...props} />)
    expect(component).toMatchSnapshot()
    expect(component.find('.bookly-card').length).toEqual(1)
    expect(component.find('.bookly-card-title').length).toEqual(1)
    expect(component.find('.bookly-card-text').length).toEqual(1)
    expect(component.find('.bookly-hoverable').length).toEqual(1)
  })

  it('does not render title when prop is blank', () => {
    props.title = ''
    component = shallow(<Card {...props} />)
    expect(component.find('.bookly-card-title').length).toEqual(0)
  })

  it('does not render text when prop is blank', () => {
    props.text = ''
    component = shallow(<Card {...props} />)
    expect(component.find('.bookly-card-text').length).toEqual(0)
  })

  it('adds extra classes correctly', () => {
    props.classes = ['oneclass', 'anotherclass']
    component = shallow(<Card {...props} />)
    expect(component.find('.bookly-oneclass.bookly-anotherclass').length).toEqual(1)
  })

  it('does not add a hover state with "hoverable=false"', () => {
    props.hoverable = false
    component = shallow(<Card {...props} />)
    expect(component.find('.bookly-hoverable').length).toEqual(0)
  })

  it('calls the "onClick" callback when clicked', () => {
    component = shallow(<Card {...props} />)
    expect(props.onClick.mock.calls.length).toBe(0)
    component.simulate('click')
    expect(props.onClick.mock.calls.length).toBe(1)
  })
})
