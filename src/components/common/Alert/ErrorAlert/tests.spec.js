import React from 'react'
import { shallow } from 'enzyme'

import ErrorAlert from './'

describe('ErrorAlert', () => {
  it('renders correctly with an error message', () => {
    const err = 'OMG THIS IS A ERROR'
    const component = shallow(<ErrorAlert error={err} />)
    const element = component.find('.bookly-alert.alert.alert-danger')
    expect(component).toMatchSnapshot()
    expect(element.length).toEqual(1)
    expect(element.text()).toEqual(err)
  })
})
