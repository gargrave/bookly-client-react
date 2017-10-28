import React from 'react'
import { shallow } from 'enzyme'

import InfoAlert from './'

describe('InfoAlert', () => {
  it('renders correctly with an error message', () => {
    const message = 'OMG THIS IS A ERROR'
    const component = shallow(<InfoAlert message={message} />)
    const element = component.find('.bookly-alert.alert.alert-info')
    expect(component).toMatchSnapshot()
    expect(element.length).toEqual(1)
    expect(element.text()).toEqual(message)
  })
})
